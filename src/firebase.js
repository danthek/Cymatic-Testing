/* import firebase from 'firebase/app'; */
/* import 'firebase/auth'; */
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyCUd8o64_aGrbcVKIEzuMPdSBUqZ8Su0Yo',
  authDomain: 'cymatic-testing-fa5a2.firebaseapp.com',
  projectId: 'cymatic-testing-fa5a2',
  storageBucket: 'cymatic-testing-fa5a2.appspot.com',
  messagingSenderId: '741260284592',
  appId: '1:741260284592:web:72f14eef38b945a256e175',
});

export const auth = app.auth();
export default app;
