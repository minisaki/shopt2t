import axios from 'axios'

const axiosClient = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
  timeout: 10000,
});

// Add a request interceptor
axiosClient.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axiosClient.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response.data;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error 
  if (error.response.status === 404) {
    throw new Error(error.response.data.message);
  } else if (error.response.status === 400) {
    throw new Error(error.response.data.message);
  } else {
    throw new Error(error.response.data.message);
  }
  // return Promise.reject(error.response.data);
});

export default axiosClient;