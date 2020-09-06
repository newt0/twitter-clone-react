import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBRVTCbpbLlYvSuVAQdpHSKGIF5kNfVz5c",
  authDomain: "twitter-clone-318d7.firebaseapp.com",
  databaseURL: "https://twitter-clone-318d7.firebaseio.com",
  projectId: "twitter-clone-318d7",
  storageBucket: "twitter-clone-318d7.appspot.com",
  messagingSenderId: "158206345113",
  appId: "1:158206345113:web:f474ec00333186ec19dd08",
  measurementId: "G-642CV86BVF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;

