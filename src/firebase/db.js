import { db } from './firebase';

// User API

export const createUser = (id, username, email) =>
  db.ref(`users/${id}`).set({
    username,
    email,
  });

export const onceGetUsers = () =>
  db.ref('users').once('value');

//export const createGame = (gameId, userID, )

export { db };