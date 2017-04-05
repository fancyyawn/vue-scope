import axios from './axios'

const requestLogin = params => {
  return axios.post(`/login`, params).then(res => res.data);
};

const getUserListPage = params => {
  return axios.get(`/user/listpage`, { params: params });
};

const removeUser = params => {
  return axios.get(`/user/remove`, { params: params });
};

const editUser = params => {
  return axios.get(`/user/edit`, { params: params });
};

const addUser = params => {
  return axios.get(`/user/add`, { params: params });
};

export default {
  requestLogin,
  getUserListPage,
  removeUser,
  editUser,
  addUser
}