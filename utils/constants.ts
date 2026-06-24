export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export const MORTGAGE_ENDPOINTS = {
  GET_ALL: `${API_BASE_URL}/mortgages`,
  APPLY: `${API_BASE_URL}/mortgages/apply`,
  UPDATE: (id: string) => `${API_BASE_URL}/mortgages/${id}`,
  DELETE: (id: string) => `${API_BASE_URL}/mortgages/${id}`
};

export const AUTH_ENDPOINTS = {
  REGISTER: `${API_BASE_URL}/auth/register`,
  LOGIN: `${API_BASE_URL}/auth/login`,
  LOGOUT: `${API_BASE_URL}/auth/logout`
};

export const USER_ENDPOINTS = {
  PROFILE: `${API_BASE_URL}/users/profile`,
  UPDATE: `${API_BASE_URL}/users/update`
};

export const PAYMENT_ENDPOINTS = {
  GET_ALL: `${API_BASE_URL}/payments`,
  CREATE: `${API_BASE_URL}/payments/create`
};

export const DOCUMENT_ENDPOINTS = {
  UPLOAD: `${API_BASE_URL}/documents/upload`,
  GET_ALL: `${API_BASE_URL}/documents`,
  DELETE: (id: string) => `${API_BASE_URL}/documents/${id}`
};
