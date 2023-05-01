const {
	CustomAPIError
} = require('../errors')
const {
	statusCodes,
	StatusCodes
} = require('http-status-codes');

const errorHandlerMiddleware = (err, req, res, next) => {
	if (err instanceof CustomAPIError) {
		return res.status(err.statusCode).json({
			msg: err.message
		})
	}
	return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
		msg: 'something went wrong please try again'
	})
}



module.exports = errorHandlerMiddleware