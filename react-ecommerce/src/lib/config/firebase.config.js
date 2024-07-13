// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC-HW1hZKcog-y8CaRFyZjxRksAZO2OJbU",
    authDomain: "esv-cosmetics.firebaseapp.com",
    projectId: "esv-cosmetics",
    storageBucket: "esv-cosmetics.appspot.com",
    messagingSenderId: "10065218158",
    appId: "1:10065218158:web:63a17152e5f97180af347f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
const db = getFirestore(app); // Initialize Firestore
// console.log('Firestore initialized:', db);
export { db };