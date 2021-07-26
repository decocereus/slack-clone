import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7vnz-Y5WXOcIc2w8dk9fmhJ85GevYcLs",
  authDomain: "slack-clone-6c09b.firebaseapp.com",
  projectId: "slack-clone-6c09b",
  storageBucket: "slack-clone-6c09b.appspot.com",
  messagingSenderId: "966272668238",
  appId: "1:966272668238:web:211165e34dfb48a604691f",
  measurementId: "G-KQ8MJ5H68J",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
export const auth = firebase.auth();

export const provider = new firebase.auth.GoogleAuthProvider();
