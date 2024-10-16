import bcrypt from 'bcryptjs';

const saltRound = 15;
export const hashPassword = (plainPassword) => {
  return bcrypt.hashSync(plainPassword, saltRound);
};

export const comparePassword = (userpassword, hashpassword) => {
  return bcrypt.compareSync(userpassword, hashpassword);
};
