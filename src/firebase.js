import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCWulr3TyMslBFNIH-EytuBnhFirG5rxQ0",
  authDomain: "igclone-bb9f8.firebaseapp.com",
  projectId: "igclone-bb9f8",
  storageBucket: "igclone-bb9f8.appspot.com",
  messagingSenderId: "692060818598",
  appId: "1:692060818598:web:fd5b24ca387238899af867",
  measurementId: "G-9GZBM9DD9K"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };