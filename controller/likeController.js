const {Like} = require("../models")


exports.createLike = async (req, res) => {
	const userId = req.user.id;
	const likeBody = req.body;
	try {
		const like = await Like.create({...likeBody, userId: userId})
		return res.status(200).json({like})
	} catch (err) {
		return res.status(500).json({error: err.message})
	}
}

exports.unLike = async (req, res) => {
	const likeId = req.params;
	try{
		await Like.delete({where: {id: likeId}})
		return res.status(200).json({message: "successfully unlike"})
	} catch (err) {
		return res.status(500).json({error: err.message})
	}
}