/**
 * @fileoverview Defines axios.
 * @copyright Shingo OKAWA 2023
 */
import axios from 'axios';

const GOOGLE_OAUTH2_BASE_URL = 'https://oauth2.googleapis.com';

export const google_oauth2 = axios.create({
  baseURL: GOOGLE_OAUTH2_BASE_URL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});
