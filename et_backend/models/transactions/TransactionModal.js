import TransactionSchema from './TransactionSchema.js';

// inserting transaction

export const insertTransaction = (obj) => {
  return TransactionSchema(obj).save();
};
