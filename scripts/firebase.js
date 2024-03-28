// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBhX1cATYB3R8_EThZs9f4p7zbOTp_hJ5k",
    authDomain: "courtlink-basketball.firebaseapp.com",
    projectId: "courtlink-basketball",
    storageBucket: "courtlink-basketball.appspot.com",
    messagingSenderId: "772647863397",
    appId: "1:772647863397:web:a5c956c222e57864e3f28c",
    measurementId: "G-VGQBLWNZT7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);