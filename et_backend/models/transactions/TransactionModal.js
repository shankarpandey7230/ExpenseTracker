import TransactionSchema from './TransactionSchema.js';

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
