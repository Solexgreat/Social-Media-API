const {Notification} = require("../models");


exports.createNotification = async (req, res) => {
	const userId = req.user.id;
	const notBody = req.body;
	try{
		const notification = await Notification.create({...notBody, userId: userId})
		return res.status(201).json({message: "successfully create", notification})
	} catch (err) {
		return res.status(500).json({error: err.message})
	}
}

exports.getAllNotification = async (req, res) => {
	const userId = req.user.id;

	try{
		const notifications = await Notification.findAll({where: {userId: userId}})
		if (!notifications)
			return res.status(400).json({message: "No notification yet"})
		return res.status(200).json({notifications})
	} catch (err) {
		return res.status(500).json({error: err.message})
	}
}

exports.updateNotification = async (req, res) => {
	const {notifyId} = req.params;
	const {isRead} = req.boby;
	try{
		await Notification.update({isRead}, {where: {id: notifyId}})

		return res.status(200).json({message: "Notification is read"})
	} catch (err) {
		return res.status(500).json({error: err.message})
	}
}