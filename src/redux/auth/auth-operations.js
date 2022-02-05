import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
const token = {
  set(token) {
    axios.defaults.headers.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.Authorization = '';
  },
};

const RegisterPageView = createAsyncThunk(
  'auth/RegisterPageView',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('user/signup', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.data);
    }
  },
);

const operations = {
  RegisterPageView,
};
export default operations;
