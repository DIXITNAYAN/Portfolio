import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBtz9f0kfX4BlNR1y7VTgXsIGg-HcQarPg",
  authDomain: "portfolio-2e044.firebaseapp.com",
  projectId: "portfolio-2e044",
  storageBucket: "portfolio-2e044.firebasestorage.app",
  messagingSenderId: "105745124689",
  appId: "1:105745124689:web:89ce475051fc7c0dc01770",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);