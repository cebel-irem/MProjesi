import firebase from 'firebase/app';
import 'firebase/firestore';
import { initializeApp } from "firebase/app";
import {getReactNativePersistence , initializeAuth} from 'firebase/auth'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore, collection} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAldAx2i5PLTUZqpuUSfRXOR7aPv9LjNE8",
  authDomain: "mprojesi-43690.firebaseapp.com",
  projectId: "mprojesi-43690",
  storageBucket: "mprojesi-43690.appspot.com",
  messagingSenderId: "320686710438",
  appId: "1:320686710438:web:36a641632e46ec8ccf1e67"
};
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app,{
    persistence: getReactNativePersistence(AsyncStorage)
});

export const db = getFirestore(app);

export const useRef = collection(db, 'user');
export const roomRef = collection(db, 'rooms');
