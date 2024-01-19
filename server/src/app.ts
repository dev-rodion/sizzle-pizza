import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { authRoutes } from './routes';
import { authenticate, logger } from './middleware';
import connectDB from './db';
import { checkEnvVariables, envVariables } from './utils/envVariables';

dotenv.config();

checkEnvVariables(envVariables);

if (!process.env.JWT_SECRET || !process.env.JWT_EXPIRES_IN || !process.env.MONGO_URL) {
    console.log('Please set environment variables');
    process.exit(1);
}

const app: Express = express();
app.use(express.json());
app.use(logger);

connectDB(process.env.MONGO_URL).catch(err => {
    console.log(err);
    process.exit(1);
});

app.use('/auth', authRoutes);

app.get('/', authenticate, (req: Request, res: Response) => {
    res.send('Hello World');
});

export default app;