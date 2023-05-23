// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkLLbj-f1ElbMgDytZn6hQ1wPJmavcumQ",
  authDomain: "insta-clone-mj.firebaseapp.com",
  projectId: "insta-clone-mj",
  storageBucket: "insta-clone-mj.appspot.com",
  messagingSenderId: "628666257850",
  appId: "1:628666257850:web:df2a66b1e78669bae0cd83"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };