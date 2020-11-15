import firebase from "firebase/app";
import "firebase/storage";
import "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyD9d4CutIwW3t8DcjGCoXGsBqxnud-i8mc",
    authDomain: "imagescore-31b26.firebaseapp.com",
    databaseURL: "https://imagescore-31b26.firebaseio.com",
    projectId: "imagescore-31b26",
    storageBucket: "imagescore-31b26.appspot.com",
    messagingSenderId: "86594147088",
    appId: "1:86594147088:web:ae8075e32e3a689a3c0b95",
    measurementId: "G-PERJRG64K3"
  };

  firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const database = firebase.database();
export {storage, database, firebase as default};