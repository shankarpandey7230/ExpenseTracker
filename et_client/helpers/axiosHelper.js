import axios from 'axios';

const rootApiEndPoint = 'http://localhost:8000/api/v1';

const getAccessJWT = () => {
  return localStorage.getItem('accessJWT');
};
const apiProcess = async ({ method, url, data, headers }) => {
  try {
    const response = await axios({
      method,
      url,
      data,
      headers,
    });
    // console.log(response.data);
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

export const getUserProfile = () => {
  const obj = {
    method: 'get',
    url: rootApiEndPoint + '/users',
    headers: {
      Authorization: getAccessJWT(),
    },
  };
  return apiProcess(obj);
};
