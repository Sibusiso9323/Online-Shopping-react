import Firebase from "firebase/app";
import "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyAQi-jzBHPNODz_z-y3OGvjGDfzUsEgO58",
  authDomain: "online-shopping-db045.firebaseapp.com",
  projectId: "online-shopping-db045",
  storageBucket: "online-shopping-db045.appspot.com",
  messagingSenderId: "986887807211",
  appId: "1:986887807211:web:2449cbf19b1ca980705eae"
};
// Initialize Firebase
const firebase = Firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export {db}