import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptors for request and response handling
api.interceptors.request.use(
  (config) => {
    // Here you can add tokens or any other custom headers if needed
    const token = localStorage.getItem('token'); // Or use cookies/localStorage to get auth token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors globally
    if (error.response) {
      // Server responded with an error code
      console.error('Error response:', error.response);
    } else if (error.request) {
      // No response received
      console.error('Error request:', error.request);
    } else {
      // General errors (like setting up the request)
      console.error('Error message:', error.message);
    }
    return Promise.reject(error);
  }
);

// API calls
export const getData = async (endpoint) => {
  try {
    const response = await api.get(endpoint);
    return response.data; // Return the response data
  } catch (error) {
    console.error('GET request failed:', error);
    throw error; // Optionally, throw the error to handle it in your components
  }
};

export const postData = async (endpoint, data) => {
  try {
    const response = await api.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('POST request failed:', error);
    throw error;
  }
};

export const putData = async (endpoint, data) => {
  try {
    const response = await api.put(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('PUT request failed:', error);
    throw error;
  }
};

export const deleteData = async (endpoint) => {
  try {
    const response = await api.delete(endpoint);
    return response.data;
  } catch (error) {
    console.error('DELETE request failed:', error);
    throw error;
  }
};