import UserSchema from './UserSchema.js';

// CRUD operation Queries

// C- Create

export const insertUser = (userObj) => {
  return UserSchema(userObj).save();
};
