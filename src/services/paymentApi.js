import api from './api';

export default async function getPaymentInformation(token) {
  const response = await api.get('/payments', { headers: { Authorization: `Bearer ${token}` } });

  return response.data;
}
