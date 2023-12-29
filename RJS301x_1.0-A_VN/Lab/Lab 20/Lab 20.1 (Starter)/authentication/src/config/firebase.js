// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCxMdQSzIE7CJRFpOHwIHBfPJdvD29bD5Y",
    authDomain: "authen-demo-tungpt.firebaseapp.com",
    projectId: "authen-demo-tungpt",
    storageBucket: "authen-demo-tungpt.appspot.com",
    messagingSenderId: "996997464306",
    appId: "1:996997464306:web:a43ad06f6ab957cf13506b",
    measurementId: "G-EEJHQNNZC8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);