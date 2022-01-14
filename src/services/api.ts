import axios from 'axios';

const baseURL = process.env.REACT_APP_URL_SITE || 'http://localhost:3000'

export const api = axios.create({
  baseURL: `${baseURL}/api`
})