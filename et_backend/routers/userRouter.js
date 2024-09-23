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
    res.json({
      status: 'error',
      message: error.message,
    });
  }
});

// user login

// user profile

export default router;
