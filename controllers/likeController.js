const {Like} = require("../models")
const {Post} = require('../models')


exports.createLike = async (req, res) => {
	const userId = req.user.id;
	const {postId} = req.params;
	try {
		const post = await Post.findByPk(postId)
		if (!post) return res.status(403).json({message:"Post not found"})
		const like = await Like.create({postId: postId, userId: userId})
		return res.status(200).json({like})
	} catch (err) {
		return res.status(500).json({error: err.message})
	}
}

exports.unLike = async (req, res) => {
	const {likeId} = req.params;
	try{
		const result = await Like.destroy({where: {id: likeId}})
		if (result === 0) {
      return res.status(404).json({ message: "Like not found" });
    }
		return res.status(200).json({message: "successfully unlike"})
	} catch (err) {
		return res.status(500).json({error: err.message})
	}
}

exports.getLikes = async (req, res) => {
	const userId = req.user.id;

	try{
		const likes = await Like.findAll({where: {userId}})
		if (!likes)
			return res.status(400).json({message: "No likes yet"})
		return res.status(200).json({likes})
	} catch (err) {
		return res.status(500).json({error: err.message})
	}
}
