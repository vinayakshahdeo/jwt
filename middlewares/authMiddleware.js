const jwt = require('jsonwebtoken');
const {
	UnAuthenticatedError
} = require('../errors')
const authenticationMiddleware = (req, res, next) => {
	const {
		headers: {
			authorization
		}
	} = req;
	if (!authorization || !authorization.startsWith('Bearer ')) {
		throw new UnAuthenticatedError("wrong bearer token");
	}
	const token = authorization.split(' ')[1];
	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		const {
			id,
			username
		} = decoded;
		req.user = {
			id,
			username
		}
		next();
	} catch (error) {
		throw new UnAuthenticatedError("wrong bearer token");
	}
}

module.exports = authenticationMiddleware;