import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig={
  apiKey: "AIzaSyA7qRoDUY0Uoqz1jFpGZieajytN0JE7yWk",
  authDomain: "insight-df0ba.firebaseapp.com",
  projectId: "insight-df0ba",
  storageBucket: "insight-df0ba.appspot.com",
  messagingSenderId: "112574495781",
  appId: "1:112574495781:web:2da526f78b9018b56a93cc",
  measurementId: "G-QVDSW0GQEF"
};
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();