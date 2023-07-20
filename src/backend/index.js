import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoute from './routes/auth.route.js';
import dataRoute from './routes/data.route.js';
import orderRoute from './routes/order.route.js';
import frageRoute from './routes/frage.route.js';

const app = express();
app.use(express.json(/* {extended: true} */));
dotenv.config();

const PORT = process.env.PORT || 5000;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

app.use('/api/auth', authRoute);
app.use('/api/data', dataRoute);
app.use('/api/order', orderRoute);
app.use('/api/frage', frageRoute);

async function start() {
	try {
		await mongoose.connect(
			`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.iswu9ps.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`)

		app.listen(PORT, () => console.log(`server started on port: ${PORT}`))
	} catch (error) {
		console.log(error);
	}
}

start();
