import axios from "axios";



//  Configuration
const BASE_URL = "https://5hxz4ksy26.execute-api.ap-south-1.amazonaws.com/dev";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor (Error Handling)

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error("Token expired or unauthorized. Logging out...");
      localStorage.removeItem("access_token");
      window.location.href = "/"; 
    }
    return Promise.reject(error);
  }
);

// -----------------------------
// 4. Shared API Methods
// -----------------------------


export const loginUser = async (requestBody) => {
  try {
    const response = await api.post("/api/v1/user/login", requestBody);
    const accessToken = response.data.data.accesstoken;
    localStorage.setItem("access_token", accessToken);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};


export default api;

