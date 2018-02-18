import { db, auth } from './firebase';
import * as uuid from 'uuid/v1';

const getUserId = () => auth.currentUser.uid;

export class DB {
  getHabits(cb) {
    db.ref(`/users/${getUserId()}/habits`).on('value', snapshot => {
      cb(snapshot.val());
    });
  }

  createHabit({ title, description }) {
    const newHabit = db.ref(`/users/${getUserId()}/habits`).push();
    newHabit.set({
      title,
      description,
    });
  }
}
