/* eslint-disable import/no-unresolved */
import axios from 'axios';
// import { API_URL } from '@env';

const axiosAPI = axios.create({
  baseURL: "http://localhost:8010/",
  'Content-Type': 'application/json',
});

export default axiosAPI;
