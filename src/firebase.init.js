// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDzT_bA5WR6G9cVBNc7KOArUS2W1RJE4uI",
    authDomain: "my-simple-hotel.firebaseapp.com",
    projectId: "my-simple-hotel",
    storageBucket: "my-simple-hotel.appspot.com",
    messagingSenderId: "633709664209",
    appId: "1:633709664209:web:61e7d9792bbadbf85932f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;