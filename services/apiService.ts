import apiClient from '../lib/axios';

export const mortgageService = {
  getAll: () => apiClient.get('/mortgages'),
  apply: (data: any) => apiClient.post('/mortgages/apply', data),
  update: (id: string, data: any) => apiClient.put(`/mortgages/${id}`, data),
  delete: (id: string) => apiClient.delete(`/mortgages/${id}`)
};

export const authService = {
  register: (email: string, password: string) =>
    apiClient.post('/auth/register', { email, password }),
  login: (email: string, password: string) =>
    apiClient.post('/auth/login', { email, password }),
  logout: () => apiClient.post('/auth/logout')
};

export const userService = {
  getProfile: () => apiClient.get('/users/profile'),
  updateProfile: (data: any) => apiClient.put('/users/update', data)
};

export const paymentService = {
  getAll: () => apiClient.get('/payments'),
  create: (data: any) => apiClient.post('/payments/create', data)
};

export const documentService = {
  upload: (formData: FormData) =>
    apiClient.post('/documents/upload', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    }),
  getAll: () => apiClient.get('/documents'),
  delete: (id: string) => apiClient.delete(`/documents/${id}`)
};
