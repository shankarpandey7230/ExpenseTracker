import UserSchema from './UserSchema.js';

// CRUD operation Queries

// C- Create

export const insertUser = (userObj) => {
  return UserSchema(userObj).save();
};

//  R - Read
export const getUserByEmail = (email) => {
  return UserSchema.findOne({ email });
};
