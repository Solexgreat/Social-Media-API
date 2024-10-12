const {User} = require("../models")


exports.getUserProfile = async (req, res) => {
	const userId = req.user.id;
	try{
		const userData = await User.findOne({where: {id: userId}});
		if (!userData)
			return res.status(403).json({message: "User not found"})

		return res.status(200).json({userData})
	} catch (err) {
		return res.staus(500).json({message: "Internal server error", error: err.message})
	}
}

exports.updateUser = async (req, res) =>{
	const userId = req.user.id;
	const userDict = req.body;

	try{
		const user = await User.findOne({where: {id: userId}});
		if (!user)
			return res.status(403).json({message: "User not found"})

		await User.update(userDict, {where: {id: userId}})
		return res.status(200).json({message: "Update successful"})
	} catch (err){
		return res.status(500).json({error: err.message})
	}
}

exports.getUserById = async (req, res) => {
	try{
		const users = await User.findOne({where: {id: req.params}})
		return res.status(200).json({users})
	} catch (err) {
		return res.status(500).json({error: err.message})
	}
}
