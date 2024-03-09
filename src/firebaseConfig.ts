/* src/firebaseConfig.ts */

import { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBuWVEsiVV_qC30W7E_KtB8hYoNUuoktr4",
  authDomain: "skode-autocv.firebaseapp.com",
  databaseURL: "https://skode-autocv-default-rtdb.firebaseio.com",
  projectId: "skode-autocv",
  storageBucket: "skode-autocv.appspot.com",
  messagingSenderId: "775986116797",
  appId: "1:775986116797:web:f1f09e2d88dc78737f5fd4"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Get and Export Auth and Firestore Instances
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };