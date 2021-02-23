import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyATGfpv32g9O-oNff2-Gi7Steqsp3_FR-Q",
  authDomain: "tinder-clone-e058f.firebaseapp.com",
  databaseURL: "https://tinder-clone-e058f.firebaseio.com",
  projectId: "tinder-clone-e058f",
  storageBucket: "tinder-clone-e058f.appspot.com",
  messagingSenderId: "90376405737",
  appId: "1:90376405737:web:9d7bdda0807b75a4512678",
  measurementId: "G-QJ36MF4KEN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();

export default database;
