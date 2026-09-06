
import axios from "axios";

const api = axios.create({
  baseURL: "https://grocery-delivery-server-nu.vercel.app/api",
  timeout: 5000,
});

export { api };
