import { verifyJWT } from '../utils/jwt.js';
import { getUserByEmail } from '../models/user/UserModal.js';

export const auth = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    // console.log(authorization);
    const result = verifyJWT(authorization);
    // console.log(result);
    if (result?.email) {
      const user = await getUserByEmail(result.email);
      if (user?._id) {
        // authorised user
        // store user info in request headers
        user.password = undefined;
        req.userInfo = user;
        return next();
      }
    }

    res.status(403).json({
      error: 'Unauthorized',
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
