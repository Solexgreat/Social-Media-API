const {Follower} = require("../models");
const {User} = require('../models')


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

exports.getFollowers = async (req, res) => {
	const userId = req.user.id;

	try{
		const followers = await Follower.findAll({where: {followedId: userId}})
		if (!followers)
			return res.status(404).json({message: "No followers yet"})

		return res.status(200).json({followers})
	} catch (err) {
		return res.status(500).json({error: err.message})
	}
}

exports.getFollowing = async (req, res) => {
	const userId = req.user.id;

	try{
		const following = await Follower.findAll({where: {followerId: userId}})
		if (!following)
			return res.status(404).json({message: "Not following anyone yet"})

		return res.status(200).json({following})
	} catch (err) {
		return res.status(500).json({error: err.message})
	}
}