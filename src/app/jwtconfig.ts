import {User} from './models/User';
import {url} from './services/variables';

export function tokenGetter() {
  const user: User = JSON.parse(localStorage.getItem('user'));

  if (!user){
    return ""
  }

  return user.access_token;
}

export const jwtConfig = {
    tokenGetter, whitelistedDomains: ['localhost:5000', url]
}
