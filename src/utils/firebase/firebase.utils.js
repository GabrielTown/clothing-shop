import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4gTngYdI9fW5C2xmLL1pUSqbZoA5PTKI",
  authDomain: "react-udemy-store-db.firebaseapp.com",
  projectId: "react-udemy-store-db",
  storageBucket: "react-udemy-store-db.appspot.com",
  messagingSenderId: "96628268544",
  appId: "1:96628268544:web:8dae06c9f846a7e94942e5"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
