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
	const userDict = req.body;
	const {postId} = req.params;

	try{
		const post = await Post.findOne({where: {id: postId}});
		if (!post)
			return res.status(403).json({message: "Post not found"})

		await Post.update(userDict, {where: {id: postId}})
		return res.status(200).json({message: "Update successful"})
	} catch (err){
		return res.status(500).json({error: err.message})
	}
}

exports.deletePost = async (req, res) => {
	const {postId} = req.params;

	try{
		const post = await Post.findOne({where: {id: postId}})
		if (!post) {
			return res.status(400).json({message: "Post not found"})
		}

		await Post.delete({where: {id: postId}})
		return res.status(200).json({message: "Post deleted"})
	} catch (err) {
		return res.status(500).json({error: err.message})
	}
}


exports.getPostById = async (req, res) => {
	const postId = req.params;
	try{
		const post = await Post.findOne({where: {id: postId}});
		if (!post)
			return res.status(403).json({message: "User not found"})

		return res.status(200).json({post})
	} catch (err) {
		return res.staus(500).json({message: "Internal server error", error: err.message})
	}
}

exports.getAllPost = async (req, res) =>{
	try{
		const userId = req.user.id;
		const posts = await Post.findAll({where: {userId: userId}})
		if (!posts) {
			return res.status(403).json({message: "User has not posted yet"})
		}

		return res.status(200).json({posts})
	} catch (err) {
		return res.status(500).json({error: err.message})
	}
}