import axios from "axios";

const axiosClient = axios.create({
  // baseURL: "http://localhost:3001",
  baseURL: "https://employee-mangement-system-uwav.onrender.com",
});

export default axiosClient;