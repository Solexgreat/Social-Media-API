const User = require('../models')
const Post = require('../models')


exports.suspendUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);

    if (!user) return res.status(404).send('User not found.');

    user.status = 'suspended';
    await user.save();

    res.status(200).send('User suspended successfully.');
  } catch (err) {
		return res.status(500).json({error: err.message})
	}
};

exports.reactivateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);

    if (!user) return res.status(404).send('User not found.');

    user.status = 'active';
    await user.save();

    res.status(200).send('User reactivated successfully.');
  } catch (err) {
		return res.status(500).json({error: err.message})
	}
};

exports.deleteUser = async (req, res) => {
	try{
		const user = await User.findByPk({where: {id: req.params}})
		if (!user) return res.status(400).json({message: "User not found"})
		await user.remove()
		return res.status(200).json({message: "User deleted"})
	} catch (err) {
		return res.status(500).json({error: err.message})
	}
}

exports.promoteUser = async (req, res) => {
  try{
		const user = await User.findByPk(req.params.id);
		if (!user) return res.status(404).send('User not found.');
		user.role = 'admin';
		await user.save();
		res.send('User promoted to admin.');
	} catch (err) {
		return res.status(500).json({error: err.message})
	}
};

exports.demoteUser = async (req, res) => {
	try{
		const user = await User.findById(req.params.id);
		if (!user) return res.status(404).send('User not found.');
		user.role = 'user';
		await user.save();
		res.send('User demoted to regular user.');
	} catch (err) {
		return res.status(500).json({error: err.message})
	}
};

exports.deletePost = async (req, res) => {
	try{
		const post = await Post.findByPk({where: {id: req.params}})
		if (!post) return res.status(400).json({message: "Post not found"})
		await post.remove()
		return res.status(200).json({message: "Post deleted"})
	} catch (err) {
		return res.status(500).json({error: err.message})
	}
}

exports.approvePost = async (req, res) => {
	try{
		const post = await Post.findByPk(req.params.id);
		if (!post) return res.status(404).send('Post not found.');
		post.isApproved = true;
		await post.save();
		res.send('Post approved.');
	} catch (err) {
		return res.status(500).json({error: err.message})
	}
};

exports.rejectPost = async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
		if (!post) return res.status(404).send('Post not found.');
		post.isApproved = false;
		await post.save();
		res.send('Post rejected.');
	} catch (err) {
		return res.status(500).json({error: err.message})
	}
};

exports.createAnnouncement = async (req, res) => {
	try{
		const announcement = new Announcement(req.body);
		await announcement.save();
		res.send('Announcement created successfully.');
	} catch (err) {
		return res.status(500).json({error: err.message})
	}
};

exports.updateSettings = async (req, res) => {
	try{
		const settings = await Settings.findOne();
		settings.featureFlag = req.body.featureFlag;
		await settings.save();
		res.send('Settings updated successfully.');
	} catch (err) {
		return res.status(500).json({error: err.message})
	}
};