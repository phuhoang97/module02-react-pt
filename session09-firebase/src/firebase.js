// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxXb9FbqQmhFdiXAgw2XzUgKzGCP2xiew",
  authDomain: "upload-img-ft02-5f91e.firebaseapp.com",
  projectId: "upload-img-ft02-5f91e",
  storageBucket: "upload-img-ft02-5f91e.appspot.com",
  messagingSenderId: "706614415937",
  appId: "1:706614415937:web:582969abdd0b99ccb06cc0",
  measurementId: "G-K0E538V8F1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);
