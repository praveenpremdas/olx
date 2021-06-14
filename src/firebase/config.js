import firebase from "firebase";
import "firebase/auth";
import "firebase/firebase";
import "firebase/storage";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBf31Fe2k6oONbiRWZ_jH08do5FBN5t-0",
  authDomain: "starlit-sum-296714.firebaseapp.com",
  projectId: "starlit-sum-296714",
  storageBucket: "starlit-sum-296714.appspot.com",
  messagingSenderId: "462732090387",
  appId: "1:462732090387:web:396ca04081d2bfb88a73e6",
  measurementId: "G-FYTK4L5YJQ",
};

export default firebase.initializeApp(firebaseConfig);
