import axios from 'axios';

const rootApiEndPoint = 'http://localhost:8000/api/v1';
const apiProcess = async ({ method, url, data }) => {
  try {
    const response = await axios({
      method,
      url,
      data,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    return {
      status: 'error',
      message: error?.response?.data?.error || error.message,
    };
  }
};

// post new user
export const PostNewUser = (data) => {
  const obj = {
    method: 'post',
    url: rootApiEndPoint + '/users',
    data,
  };
  return apiProcess(obj);
};

export const loginUser = (data) => {
  const obj = {
    method: 'post',
    url: rootApiEndPoint + '/users/login',
    data,
  };
  return apiProcess(obj);
};
