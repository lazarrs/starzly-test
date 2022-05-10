import axios from 'axios';
const baseURL = 'https://stg.starzly.io/api';

export const AxiosInstance = axios.create({baseURL});
