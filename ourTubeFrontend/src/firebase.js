import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAh-5G7upUUOgbO19iokha14p2BH53E-Ks",
  authDomain: "ourtube-cc171.firebaseapp.com",
  projectId: "ourtube-cc171",
  storageBucket: "ourtube-cc171.appspot.com",
  messagingSenderId: "584474569080",
  appId: "1:584474569080:web:ecc3721ae2b2b45f97008d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const provider = new GoogleAuthProvider();

export default app;