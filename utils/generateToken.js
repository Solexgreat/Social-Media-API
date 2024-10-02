const jwt = require("jsonwebtoken")


exports.generateToken = (user) =>{

	jwt.sign({
		user: {
			id: user.id,
			email: user.email,
			username: user.username
		 }}, process.env.JWT_SECRET,
		{expiresIn: '1h'
		}
	);
}