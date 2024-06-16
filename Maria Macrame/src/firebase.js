// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD6IOkLe4puCRUEgKyWT6R92m7g7PM-f_c",
  authDomain: "maria-ecommercewebapp.firebaseapp.com",
  projectId: "maria-ecommercewebapp",
  storageBucket: "maria-ecommercewebapp.appspot.com",
  messagingSenderId: "426828412813",
  appId: "1:426828412813:web:5f6ffa8fd63edf3f5bafc4",
  measurementId: "G-4934GE7W66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };