import axios from 'axios';
import API_BASE_URL from '../config';

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, { email, password });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const register = async (name, email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/accounts/create`, { name, email, password });
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
