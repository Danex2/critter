import decode from 'jwt-decode';

export default function checkAuth() {
  const token = localStorage.getItem('token');
  const refresh = localStorage.getItem('refreshToken');
  if (!token || !refresh) {
    return false;
  }

  try {
    const decoded = decode(refresh);
    if (decoded.exp < Date.now() / 1000) {
      return false;
    }
  } catch (e) {
    return false;
  }
  return true;
}
