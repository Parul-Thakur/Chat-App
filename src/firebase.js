import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDlEfNsn7ng6f6xMWo5mE5BkVpW4jz9YZw",
  authDomain: "chatting-app-9db61.firebaseapp.com",
  projectId: "chatting-app-9db61",
  storageBucket: "chatting-app-9db61.appspot.com",
  messagingSenderId: "1096378923959",
  appId: "1:1096378923959:web:722604f6ace72996518632"
};
// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage()
export const db = getFirestore();