import axios from 'axios'
import MockAdapter from 'axios-mock-adapter';

import mockUsers from './mock/mockUsers'

axios.defaults.baseURL = process.env.API_URL || 'http://localhost:3000';

if(process.env.NODE_ENV === 'development'){
  let mock = new MockAdapter(axios);
  mockUsers.setup(mock);
}

export default axios;