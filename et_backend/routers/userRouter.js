import express from 'express';
import { insertUser } from '../models/user/UserModal.js';

import hashPassword from '../utils/bcrypt.js';

const router = express.Router();

// user sign up
router.post('/', async (req, res, next) => {
  try {
    // console.log(req.body);
    // get the object user and data verification as well encrypt the password and insert user
    req.body.password = hashPassword(req.body.password);
    console.log(req.body.password);
    const user = await insertUser(req.body);
    user?._id
      ? res.json({
          status: 'success',
          message: 'Your account has been created, try to log in now',
        })
      : res.json({
          status: 'error',
          message: 'Error occurred.Could not create account, please try again',
        });
  } catch (error) {
    let msg = error.message;

    if (msg.includes('E11000 duplicate key error collection')) {
      msg = 'An user with this email already exist. Try using another one ';
    }
    res.json({
      status: 'error',
      message: msg,
    });
  }
});

// user login

// user profile

export default router;
