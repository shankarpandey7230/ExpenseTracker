import express from 'express';
import {
  insertTransaction,
  getTransactions,
  deleteTransactions,
} from '../models/transactions/TransactionModal.js';

const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    const { _id } = req.userInfo;

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
    next(error);
  }
});

// transaction for logged in user

router.get('/', async (req, res, next) => {
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
    next(error);
  }
});
// delete transactions
router.delete('/', async (req, res, next) => {
  try {
    // receive id of all transaction/ one trans and users Id
    const ids = req.body;
    const { _id } = req.userInfo;

    // deletionç
    const result = await deleteTransactions(_id, ids);

    res.json({
      status: 'success',
      message: result.deletedCount + ' transactions deleted Successfully',
    });
  } catch (error) {
    next(error);
  }
});
export default router;
