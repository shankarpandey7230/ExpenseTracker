import express from 'express';
import { insertTransaction } from '../models/transactions/TransactionModal.js';

const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    // console.log(req.body);
    const { _id } = req.userInfo;
    // console.log(user);
    req.body.userId = _id;
    const result = await insertTransaction(req.body);

    result?._id
      ? res.json({
          status: 'success',
          message: 'transaction added successfully',
        })
      : res.json({
          status: 'error',
          message: 'something went wrong could not add transaction',
        });
  } catch (error) {
    console.log(error);
  }
});

export default router;
