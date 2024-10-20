import axios from 'axios';

const API_URL = 'https://github.com/maurobarrales25/Backend-Spaceship-App.git'; // Acá va la utl del backend

export const sendScore = async (score) => {
  try {
    const response = await axios.post(`${API_URL}/scores`, { score });
    return response.data;
  } catch (error) {
    console.error('Error sending score:', error);
    throw error;
  }
};