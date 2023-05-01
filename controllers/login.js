const login = async (req, res) => {
	res.send('fake login resigter/signup')
}

const dashboard = async (req, res) => {
	const luckyNumber = Math.floor(Math.random() * 100);
	res.status(200).json({
		msg: `Hello, Vinayak Shahdeo`,
		secret: `lucky number is ${luckyNumber}`
	})
}

module.exports = {
	login,
	dashboard
}