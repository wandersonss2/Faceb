import axios from 'axios';
import API_BASE_URL from '../config';

export const getProfile = async (token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/accounts/profile`, {
      headers: { 'x-auth-token': token },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
