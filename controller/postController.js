const {Post} = require("../models")


exports.createPost = async (req, res) => {
	const userId = req.user.id;
	const postDict = req.body;
	try{
		const post = await Post.create({...postDict, userId:userId})
		return res.status(201).json({post})
	} catch (err){
		return res.status(500).json({error: err.message})
	}
}

exports.updatePost = async (req, res) => {
	const userId = req.user.id;
	const userDict = req.body;
	const postId = req.params;

	try{
		const user = await Post.findOne({where: {id: postId}});
		if (!user)
			return res.status(403).json({message: "Post not found"})

		await Post.update(userDict, {where: {id: postId}})
		return res.status(200).json({message: "Update successful"})
	} catch (err){
		return res.status(500).json({error: err.message})
	}
}