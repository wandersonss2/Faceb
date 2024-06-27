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

export const register = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/register`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
