import jwt from 'jsonwebtoken';

export const signJwt = (obj) => {
  const token = jwt.sign(obj, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });

  //   storing in the database
  return token;
};

export const verifyJWT = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return error.message;
  }
};
