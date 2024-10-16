import express from 'express';
import { insertUser, getUserByEmail } from '../models/user/UserModal.js';

import { hashPassword, comparePassword } from '../utils/bcrypt.js';
import { signJwt } from '../utils/jwt.js';
import { auth } from '../middlewares/authMiddleware.js';

const router = express.Router();
router.use(express.json());

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

router.post('/login', async (req, res, next) => {
  // console.log('request', req.body);
  // res.send('success');
  try {
    // receive email and password
    const { email, password } = req.body;
    // console.log('Email:', email);
    if (email && password) {
      // console.log(email, password);

      // find the user by email and password verification
      const user = await getUserByEmail(email);
      if (user?._id) {
        const matchedPassword = comparePassword(password, user.password);
        if (matchedPassword) {
          // true user and authenticate

          // successful JWT and store in database and return user {} with jwt token
          const accessJWT = signJwt({
            email: email,
          });
          user.password = undefined;
          res.json({
            status: 'success',
            message: 'Logged in',
            user,
            accessJWT,
          });
          return;
        }
      }
    }
    res.status(401).json({
      error: 'Invalid credentials ',
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// user profile from accessJWT
router.get('/', auth, (req, res, next) => {
  try {
    // 1.will get token
    // 2. create auth middleware
    // token correct validate
    // get user email from token
    // get user by email
    const user = req.userInfo;
    res.json({
      status: 'success',
      message: 'Your profile is matched',
      user,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

export default router;
