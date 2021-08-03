import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDu6wqejR-Rd5qpzEQH30ydP-zkNB6g7z0",
    authDomain: "slack-clone-84.firebaseapp.com",
    projectId: "slack-clone-84",
    storageBucket: "slack-clone-84.appspot.com",
    messagingSenderId: "1017363808572",
    appId: "1:1017363808572:web:91f4607548b81d9e2ede39",
    measurementId: "G-HZ9TH2TR02"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export{auth, db, provider };