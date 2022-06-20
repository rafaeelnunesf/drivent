import api from './api';

export async function getActivities(token, dateId) {
  const response = await api.get(`/activities/${dateId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
}
