export const errorHandler = (error, req, res, next) => {
  // setting up default status code and message

  const statusCode = error.statusCode || 500;
  const message = error.message || 'Internal Server Error';
  console.log(error);
  res.status(statusCode).json({
    status: 'error',
    message,
  });
};
