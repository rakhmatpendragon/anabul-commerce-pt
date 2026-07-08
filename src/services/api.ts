import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8080/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    // Tambahkan token JWT dari state/localStorage jika ada
    const token = localStorage.getItem('token');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle error global seperti 401 Unauthorized
    if (error.response && error.response.status === 401) {
      // Logic logout / clear session
      localStorage.removeItem('token');
      // window.location.href = '/login'; // opsional
    }
    return Promise.reject(error);
  }
);

export default api;
