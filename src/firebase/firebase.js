import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBIgYUJU5Kocn7ObNzuqaWrf_B30j05rb0',
  authDomain: 'ukrainian-house.firebaseapp.com',
  projectId: 'ukrainian-house',
  storageBucket: 'ukrainian-house.appspot.com',
  messagingSenderId: '802758529641',
  appId: '1:802758529641:web:11f9d4483192079114c8f8',
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
