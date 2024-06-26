import firebase from 'firebase/app';
import 'firebase/firestore';
import { initializeApp } from "firebase/app";
import {getReactNativePersistence , initializeAuth} from 'firebase/auth'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore, collection} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDCmnfoSjssPrHihR6AxqWPwrLmdz_PYoU",
  authDomain: "sesliasistan-2921c.firebaseapp.com",
  projectId: "sesliasistan-2921c",
  storageBucket: "sesliasistan-2921c.appspot.com",
  messagingSenderId: "343889494229",
  appId: "1:343889494229:web:61e337f0c04ae27a94225c"
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app,{
    persistence: getReactNativePersistence(AsyncStorage)
});

export const db = getFirestore(app);

export const useRef = collection(db, 'user');
export const roomRef = collection(db, 'rooms');