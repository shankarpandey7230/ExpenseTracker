import express from 'express';
import {
  insertTransaction,
  getTransactions,
} from '../models/transactions/TransactionModal.js';

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
    res.json({
      status: 'error',
      message: error.message,
    });
  }
});

// transaction for logged in user

router.get('/', async (req, res) => {
  try {
    // all transaction for individual user
    const { _id } = req.userInfo;
    const transactions = (await getTransactions(_id)) || [];
    res.json({
      status: 'success',
      message: 'transactions ',
      transactions,
    });
  } catch (error) {
    console.log(error);
    res.json({
      status: 'error',
      message: error.message,
    });
  }
});
export default router;
