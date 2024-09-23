import express from 'express';
import userRouter from './routers/userRouter.js';
import { connectDB } from './config/mongodbConfig.js';

const server = express();

const PORT = process.env.PORt || 8000;

// connect DB
connectDB();

// MiddleWares for json data
server.use(express.json());

// API endpoints

server.use('/api/v1/users', userRouter);

server.get('/', (req, res) => {
  res.json({
    message: 'Success',
  });
});

server.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server is running at http://localhost:${PORT}`);
});
