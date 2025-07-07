import axios from 'axios'

const api = axios.create({
  baseURL: "/api", // Next.js will resolve this to http://localhost:3000/api
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;