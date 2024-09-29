const {User} = require("../models");
const jwt = require("jsonwebtoken");
const argon2 = require("argon2");


exports.signup = async (req, res) => {
	const {firstName, lastName, email, password, userName} = req.body;

	try{
		let user = await User.findOne({where: {email}})
		if (user){
			return res.status(403).json({message: "email already exist"})
		}
		const hashed_password = await argon2.hash(password);
		user = await User.create({firstName, lastName, email,
			hashed_password: hashed_password,
			userName})
			return res.status(200).json({message: "Signup successful", user})
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
		const token = jwt.sign({
			user: {
				id: user.id,
				email: user.email
			 }}, process.env.JWT_SECRET,
			{expiresIn: '1h'
			}
		);
		return res.status(200).json({message: "login successful", token})
	} catch (err) {
		return res.status(500).json({error: err.message})
	}
}