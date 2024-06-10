/**
 * @fileoverview Defines axios.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import axios from 'axios';

const DELTA_SHARING_BASE_URL = process.env.DELTA_SHARING_BASE_URL;

export const DeltaSharing = axios.create({
  baseURL: DELTA_SHARING_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const GOOGLE_OAUTH2_BASE_URL = 'https://oauth2.googleapis.com';

export const GoogleOAuth2 = axios.create({
  baseURL: GOOGLE_OAUTH2_BASE_URL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});
