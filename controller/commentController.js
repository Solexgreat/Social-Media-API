const {Comment} = require('../models');


exports.createComment = async (req, res) => {
	const commentBody = req.body;
	const {postId} = req.params;
	const userId = req.user.id;

	try{
		const post = await Post.findOne({where: {post: postId}});
		if (!post)
			return res.status(400).json({message: "Post not found"});
		const comment = await Comment.create({...commentBody,
			userId: userId,
			postId: postId
		})
		const displayComment = {
			content: comment.content,
			imageUrl: comment.imageUrl,
			videoUrl: comment.viodeoUrl,
		}

		return res.status(200).json(displayComment);
	} catch (err) {
		return res.status(500).json({message: "Internal server error", error: err.message});
	}
}

exports.updateComment = async (req, res) =>{
	const {commentId} = req.params;
	const commentBody = req.body;

	try{
		let comment = await Comment.findByPk(commentId);
		if (!comment)
			return res.status(400).json({message: "Comment not found"});
		await Comment.update(commentBody, {where: {id:commentId}});
		comment = await Comment.findByPk(commentId)
		return res.status(200).json(comment);
	} catch (err) {
		return res.status(500).json({message: "Internal server error", error: err.message});
	}
}