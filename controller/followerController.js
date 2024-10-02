const {Follower} = require("../models")


exports.createFollow = async (req, res) => {
	const userId = req.user.id;
	const followerBody = req.body;
	try {
		const follow = await Follower.create({...followerBody, followerId: userId})
		return res.status(200).json({follow})
	} catch (err) {
		return res.status(500).json({error: err.message})
	}
}

exports.unFollow = async (req, res) => {
	const followId = req.params;
	try{
		await Follower.delete({where: {id: followId}})
		return res.status(200).json({message: "successfully unlike"})
	} catch (err) {
		return res.status(500).json({error: err.message})
	}
}