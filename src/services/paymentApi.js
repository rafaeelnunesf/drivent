import api from './api';

export async function getPaymentInformation(token) {
  const response = await api.get('/payments', { headers: { Authorization: `Bearer ${token}` } });

  return response.data;
}

export async function confirmPayment(userData) {
  const response = await api.post('/payments', userData);

  return response.data;
}
