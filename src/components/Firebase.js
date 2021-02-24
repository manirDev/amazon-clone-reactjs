import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAt7bdzLXaVZnP1b20dR5bJNqTCJ8H1TQ0",
    authDomain: "e-clone-c6e20.firebaseapp.com",
    projectId: "e-clone-c6e20",
    storageBucket: "e-clone-c6e20.appspot.com",
    messagingSenderId: "1034278175370",
    appId: "1:1034278175370:web:4a4999f58c226b8e092373",
    measurementId: "G-H2049JGT3K"
});

/*const db = firebaseApp.firestore();*/
const auth = firebase.auth();

export { auth};