import axios from 'axios';

const rootApiEndPoint = import.meta.env.VITE_ROOT_URL + '/api/v1';

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

// Transaction api calls

export const PostNewTransaction = (data) => {
  const obj = {
    method: 'post',
    url: rootApiEndPoint + '/transactions',
    data,
    headers: {
      Authorization: getAccessJWT(),
    },
  };
  return apiProcess(obj);
};

// fetch transactions for logged in user
export const fetchTransactions = () => {
  const obj = {
    method: 'get',
    url: rootApiEndPoint + '/transactions',

    headers: {
      Authorization: getAccessJWT(),
    },
  };
  return apiProcess(obj);
};

export const deleteTransactions = (data) => {
  const obj = {
    method: 'delete',
    url: rootApiEndPoint + '/transactions',
    data,
    headers: {
      Authorization: getAccessJWT(),
    },
  };
  return apiProcess(obj);
};
