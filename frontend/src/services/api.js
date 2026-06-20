import axios from 'axios';

const API = axios.create({
  // Force it to use the live environment variable if it exists
  baseURL: import.meta.env.VITE_API_URL, 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default API;