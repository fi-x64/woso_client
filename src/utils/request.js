import axios from "axios";

const HOST = import.meta.env.VITE_SERVER_HOST;
const PORT = import.meta.env.VITE_PORT;

const request = axios.create({
  // baseURL: `http://localhost:${PORT}/api`,
  baseURL: `${HOST}/api`,
});

export default request;
