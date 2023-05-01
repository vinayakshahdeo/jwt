const jwt = require('jsonwebtoken');
const {
	BadRequestError
} = require('../errors');

const login = async (req, res) => {
	const {
		body: {
			username,
			password
		}
	} = req;
	if (!username || !password) {
		throw new BadRequestError('Please Provide username and password')
	}
	//demo id
	const id = new Date().getTime();

	const token = jwt.sign({
		id,
		username
	}, process.env.JWT_SECRET, {
		expiresIn: '30d'
	});

	res.status(200).json({
		msg: "user created",
		token
	})
}

const dashboard = async (req, res) => {
	const luckyNumber = Math.floor(Math.random() * 100);
	res.status(200).json({
		msg: `Hello, ${req.user.username}`,
		secret: `lucky number is ${luckyNumber}`
	})
}

module.exports = {
	login,
	dashboard
}