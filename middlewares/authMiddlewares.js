const jwt = require("jsonwebtoken");


const verifyToken = (req, res, next) =>{
	const authHeader = req.header("Authorization")

	// verify token
	if (!authHeader) {
		return res.status(400).json({message: "token is missing"})
	}
	try{
		const jwtToken = authHeader.split(" ")[1];
		const decode =  jwt.verify(jwtToken, process.env.JWT_SECRET)
		req.user = decode.user
		next()
		return;
	} catch (err) {
		return res.status(500).json({message: "Token is not valid", error: err.message})
	}
}


const authorzeRole = async (role) => {
	return (req, res, next) => {
		if (req.body.role != role) {
			res.status(403).json('Forbidden')
		}
		next();
	}
}

module.exports = verifyToken;
module.exports = authorzeRole;