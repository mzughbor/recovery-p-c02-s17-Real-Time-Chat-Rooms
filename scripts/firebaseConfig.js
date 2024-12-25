// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js"; // Import getFirestore

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCM_vFI3EFPzTqKeoTrUEIzMCs1YQZe9Iw",
    authDomain: "app-fire-mzug.firebaseapp.com",
    projectId: "app-fire-mzug",
    storageBucket: "app-fire-mzug.firebasestorage.app",
    messagingSenderId: "442805586029",
    appId: "1:442805586029:web:e8f98b4201e58a29965764",
    measurementId: "G-GPK49Y4JTZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// init services
const db = getFirestore(app);

export { db };