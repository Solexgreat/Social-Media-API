const {User} = require("../models");
const jwt = require("jsonwebtoken");
const {generateToken} = require("../utils/generateToken")
const argon2 = require("argon2");
const { sendEmail } = require("../utils/sendEmails");


exports.signup = async (req, res) => {
	const {firstName, lastName, email, password, username} = req.body

	try{
		let user = await User.findOne({where: {email}})

		if (user) return res.status(403).json({message: "email already exist"})

		user = await User.findOne({where: {username}})

		if (user) return res.status(403).json({message: "username already exist"})

		hashed_password = await argon2.hash(password);
		user = await User.create({firstName, lastName, email,
			hashed_password: hashed_password,
			username})

		const token = generateToken(user)
		return res.status(201).json({message: "Signup successful", token: token})
	} catch (err) {
		return res.status(500).json({message: "Internal server error", error: err.message})
	}
}

exports.login = async (req, res) => {
	const {username, email, password} = req.body;
	const user = (username) ? await User.findOne({where: {username}}) : await User.findOne({where: {email}});
	if (!user) {
		return res.status(403).json({message: "user doesn't exist"});
	}
	try{
		const isPasswordValid = await argon2.verify(user.hashed_password, password)
		if (!isPasswordValid) {
			return res.status(400).json({message: "password is incorrect"})
		}
		const token = generateToken(user)
		return res.status(201).json({message: "login successful", token: token})
	} catch (err) {
		return res.status(500).json({error: err.message})
	}
}

exports.passwordResetRequest = async (req, res) => {
	const {email} = req.body;
	try{
		const user = await User.findOne({where: {email: email}})
		if (!user) {
			return res.status(400).json({message: "Invalid Email"})
		}
		const resetToken = generateToken(user)
		const resetUrl = `${req.protocol}://${req.get(host)}/reset-password/${resetToken}`

		await sendEmail(user.email, 'Password reset token', `Please clik the link to reset your password: ${resetUrl}` )

		return res.status(200).json({message: "Password has been sent to your email"})
	} catch (err) {
		return res.status(500).json({error: err.message})
	}
}

exports.resetPassword = async (req, res) => {
	const {token} = req.params;
	const {newPassword} = req.body;

	try{
		const decode = jwt.verify(token, process.env.JWR_SECRET)
		const hashed_password = await argon2.hash(newPassword);

		let user = await User.findByPk(decode.id)
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}
		user.hashed_password = hashed_password
		await user.save()

		 return (res.status(200).json({message: "Password change successfully"}) && user)
	} catch (err) {
		if (err.name == "TokenExpiredError")
			return res.status(400).json({message: "Token has expired"})
		return res.status(500).json({error: err.message})
	}
}