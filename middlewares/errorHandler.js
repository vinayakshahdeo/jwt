const CustomAPIError = require('../errors');

const errorHandlerMiddleware = (req, res, next, err) => {
	if (err instanceof CustomAPIError) {
		return res.status(res.statusCode).json({
			message: err.msg
		})
	}
	return res.status(500).send('something went wrong please try again')
}

module.exports = errorHandlerMiddleware;