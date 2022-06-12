import api from './api';

export async function githubLogin(code) {
  const response = await api.post('auth/github/sign-in', { code });

  return response.data;
}
