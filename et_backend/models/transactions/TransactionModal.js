import TransactionSchema from './TransactionSchema.js';

import mongoose from 'mongoose';

// inserting transaction

export const insertTransaction = (obj) => {
  return TransactionSchema(obj).save();
};

export const getTransactions = (userId) => {
  if (!userId) {
    throw new Error('userId is required');
  }
  return TransactionSchema.find({ userId });
};

// deleting transaction

export const deleteTransactions = (userId, idsToDelete) => {
  return TransactionSchema.deleteMany({ userId, _id: { $in: idsToDelete } });
};
