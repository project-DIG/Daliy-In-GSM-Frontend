import { TokenInterface } from 'types/token';

class TokenService {
  getLocalRefreshToken() {
    const user = JSON.parse(localStorage.getItem('token') || '{}');
    return user?.refresh_token;
  }

  getLocalAccessToken() {
    const user = JSON.parse(localStorage.getItem('token') || '{}');
    return user?.access_token;
  }

  updateLocalAccessToken(token: string) {
    let user = JSON.parse(localStorage.getItem('token') || '{}');
    user.access_token = token;
    localStorage.setItem('token', JSON.stringify(user));
  }

  getUser() {
    return JSON.parse(localStorage.getItem('token') || '{}');
  }

  setUser(user: TokenInterface) {
    localStorage.setItem('token', JSON.stringify(user));
  }

  removeUser() {
    localStorage.removeItem('token');
  }
}

export default new TokenService();
