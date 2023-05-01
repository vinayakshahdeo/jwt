const connectDB = require('../store/db');

require('dotenv').config();

//async errors

require('express-async-errors');

//express setup
const express = require('express');
const app = express();
const port = process.env.PORT || 5001
const mainRouter = require('./routes')
//middlewares
const notFoundMiddleWare = require('./middlewares/notFound');
const errorHandlerMiddleware = require('./middlewares/errorHandler');

app.use(express.json());

//routes
app.use('/api/v1', mainRouter);

app.use(notFoundMiddleWare);
app.use(errorHandlerMiddleware);


//start server
const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI)
		app.listen(port, console.log(`server is listening on port ${port}`));
	} catch (error) {
		console.log(err)
	}
}
start();