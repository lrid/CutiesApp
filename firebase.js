// Import the functions you need from the SDKs you need
import * as firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIPG8jgj7NdI_qXW6V8v5M1LD-pawB8wE",
  authDomain: "cutiesapp-e6419.firebaseapp.com",
  projectId: "cutiesapp-e6419",
  storageBucket: "cutiesapp-e6419.appspot.com",
  messagingSenderId: "720903373863",
  appId: "1:720903373863:web:1f45221481b206abfaba02"
};

// Initialize Firebase

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };