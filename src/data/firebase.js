import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDBLyltxLwdq72dfOMHg8ohlCeHs1Gt4Tk", 
  authDomain: "trello-91620.firebaseapp.com", 
  projectId: "trello-91620", 
  storageBucket: "trello-91620.appspot.com", 
  messagingSenderId: "975115320537", 
  appId: "1:975115320537:web:4bfb23a7bb43ed0d5f5f94" 
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };

