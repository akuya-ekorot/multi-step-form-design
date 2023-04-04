// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgILZdkwcM9y5oNjxq95EPll2SslNhrnE",
  authDomain: "react-multi-part-form.firebaseapp.com",
  projectId: "react-multi-part-form",
  storageBucket: "react-multi-part-form.appspot.com",
  messagingSenderId: "720988391814",
  appId: "1:720988391814:web:bebbd3aeada47b87320407"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
