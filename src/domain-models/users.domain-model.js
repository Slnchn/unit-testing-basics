import axios from 'axios';

import { USERS_PATH } from '../constants';

function getUsers(userId = '') {
  return axios(`${USERS_PATH}/${userId}`).then(({ data }) => data);
}

export function getUserContactData(userId) {
  if (!userId) {
    return Promise.reject(new Error('User id was not provided'));
  }

  return getUsers(userId).then((userData) => ({
    name: userData.name,
    username: userData.username,
    email: userData.email,
    phone: userData.phone,
  }));
}
