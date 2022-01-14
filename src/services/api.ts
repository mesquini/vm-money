import axios from 'axios';

const baseURL = process.env.URL || 'http://localhost:3000'

export const api = axios.create({
  baseURL: `${baseURL}/api`
})