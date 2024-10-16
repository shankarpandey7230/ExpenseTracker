import { verifyJWT } from '../utils/jwt.js';

export const auth = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    // console.log(authorization);
    const result = verifyJWT(authorization);
    console.log(result);

    const isAuth = false;
    isAuth
      ? next()
      : res.status(403).json({
          error: 'Unauthorised',
        });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
