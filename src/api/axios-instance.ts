import axios from "axios";

export const todoAxios = axios.create({
  baseURL: process.env.REACT_APP_SEVER_URL,
});
