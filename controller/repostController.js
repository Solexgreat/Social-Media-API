const {Repost} = require('../models')
const {Post} = require('../models')



exports.repost = async (req, res) => {
	const {postId} = req.params;
	const userId = req.user.id;
	const repostBody = req.body;
	try{
		const post = await Post.findByPk(postId);
		if (!post)
			return res.status(404).json({message:"Post not found"})
		const repost = await Repost.create({...repostBody, userId: userId, originalPostId: postId})

		return res.status(200).json({repost})
	} catch (err) {
		return res.status(500).json({error: err.message})
	}
}

exports.updateRepost = async (req, res) => {
	const {quote} = req.body;
	const {repostId} = req.params;
	try {
		let repost = await Repost.findByPk(repostId);
		if (!repost) {
			return res.status(404).json({message: "Repost not found"})
		}
		repost.quote = quote;
		await repost.save()
	} catch (err) {
		return res.status(500).json({error: err.message})
	}
}

exports.getYourRepost = async (req, res) => {
	const userId = req.user.id;
	try{
		const reposts = await Repost.findAll({where: {userId}})
		if (!reposts) {
			return res.status(404).json({message: "No reposts"})
		}
		return res.status(200).json({reposts})
	} catch (err) {
		return res.status(500).json({error: err.message})
	}
}

exports.getRepostForPost = async (req, res) => {
	const {originalPostId} = req.body;
	try{
		const reposts = await Repost.findAll({where: {originalPostId}})
		if (!reposts) {
			return res.status(404).json({message: "No reposts"})
		}
		return res.status(200).json({reposts})
	} catch (err) {
		return res.status(500).json({error: err.message})
	}
}