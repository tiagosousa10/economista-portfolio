import axios from "axios";

export const api = axios.create({
  baseURL: "http://economista-portfolio-server.vercel.app",
  withCredentials: true, // <— envia cookies
  timeout: 10000,
});
