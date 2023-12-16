import axios from "axios";

export const todoApi = axios.create({
  baseURL: process.env.REACT_APP_SEVER_URL,
});
