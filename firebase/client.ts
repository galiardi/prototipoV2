import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAOmQJvSTSgczS8UQ9z7zLPjYHf1DcO6FI',
  authDomain: 'prototipo-grupo5.firebaseapp.com',
  projectId: 'prototipo-grupo5',
  storageBucket: 'prototipo-grupo5.appspot.com',
  messagingSenderId: '476421564348',
  appId: '1:476421564348:web:e8ca6b286837835ef32db9',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
