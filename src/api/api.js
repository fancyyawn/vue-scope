/*eslint-disable */
import axios from 'axios'
import axiosMock from './mock/mockAxios'

let base;
if(process.env.NODE_ENV === 'production'){
  base = process.env.API_URL || 'http://localhost:3000'
}else{
  axiosMock.setup()
  base = ''
}

export const requestLogin = params => {
  return axios.post(`${base}/login`, params).then(res => res.data);
};

export const getUserListPage = params => {
  return axios.get(`${base}/user/listpage`, { params: params });
};

export const removeUser = params => {
  return axios.get(`${base}/user/remove`, { params: params });
};

export const editUser = params => {
  return axios.get(`${base}/user/edit`, { params: params });
};

export const addUser = params => {
  return axios.get(`${base}/user/add`, { params: params });
};