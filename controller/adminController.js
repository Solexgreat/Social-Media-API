const User = require('../models')


exports.suspendUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);

    if (!user) return res.status(404).send('User not found.');

    user.status = 'suspended';
    await user.save();

    res.status(200).send('User suspended successfully.');
  } catch (error) {
    res.status(500).send('Server error.');
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
  } catch (error) {
    res.status(500).send('Server error.');
  }
};