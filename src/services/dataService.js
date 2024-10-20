import axios from 'axios';

const API_URL = 'https://github.com/maurobarrales25/Backend-Spaceship-App.git'; // Acá va la utl del backend

const dataService = {
  sendScore: async (mode, score, username) => {
    try {
      const response = await axios.post(`${API_URL}/scores`, { mode, score, username });
      return response.data;
    } catch (error) {
      console.error('Error sending score:', error);
      throw error;
    }
  },
  getScores: async () => {
    try {
      const response = await axios.get(`${API_URL}/ranking`);
      return response.data;
    } catch (error) {
      console.error('Error fetching scores:', error);
      throw error;
    }
  }
};

export default dataService;