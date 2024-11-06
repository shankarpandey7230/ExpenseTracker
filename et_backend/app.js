import express from 'express';
import userRouter from './routers/userRouter.js';
import transactionRouter from './routers/transactionRouter.js';
import { connectDB } from './config/mongodbConfig.js';
import cors from 'cors';
import { auth } from './middlewares/authMiddleware.js';
const server = express();

import { errorHandler } from './middlewares/errorHandlerMiddleware.js';

const PORT = process.env.PORt || 8000;

// connect DB
connectDB();

// MiddleWares for json data
server.use(express.json());
server.use(cors());

// API endpoints

server.use('/api/v1/users', userRouter);
server.use('/api/v1/transactions', auth, transactionRouter);

server.get('/', (req, res) => {
  res.json({
    message: 'Success',
  });
});

// 404 page not found error
server.use((req, res, next) => {
  const error = new Error('Page not Found');
  error.statusCode = 404;
  next(error);
});

// Global error handler
server.use(errorHandler);
server.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server is running at http://localhost:${PORT}`);
});
