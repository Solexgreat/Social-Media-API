const jwt = require("jsonwebtoken");


const authMiddlewares = (req, res, next) =>{
	const {token} = req.header("Authorization")

	// verify token
	if (!token) {
		return req.status(400).json({message: "token is missing"})
	}
	try{
		const jwtToken = token.split(" ")[1];
		const decode =  jwt.verify(jwtToken, process.env.JWT_SECRET)
		req.user = decode.user
		next()
		return;
	} catch (err) {
		return req.status(500).json({message: "Token is not valid", error: err.message})
	}
}

module.exports = authMiddlewares;