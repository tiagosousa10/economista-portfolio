import axios from "axios";

export const api = axios.create({
  baseURL: "https://economista-portfolio-server.vercel.app",
  withCredentials: true, // <— envia cookies
  timeout: 10000,
});
