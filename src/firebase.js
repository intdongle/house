// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgPch-OdpD6KrGzOKfps6FWjO9oE4ZUqg",
  authDomain: "esp8-7e5a3.firebaseapp.com",
  databaseURL: "https://esp8-7e5a3-default-rtdb.firebaseio.com",
  projectId: "esp8-7e5a3",
  storageBucket: "esp8-7e5a3.appspot.com",
  messagingSenderId: "714835520183",
  appId: "1:714835520183:web:e566de51eda65d467bfb32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =getDatabase(app);