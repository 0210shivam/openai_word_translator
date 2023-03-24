import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
   apiKey: "AIzaSyAjV9yZ5W7GVlaDYxDOdsIGmmr9BMi4_7g",
   authDomain: "openai-word-translator.firebaseapp.com",
   projectId: "openai-word-translator",
   storageBucket: "openai-word-translator.appspot.com",
   messagingSenderId: "509269142850",
   appId: "1:509269142850:web:7e903b56c6ee33dee6ecdb"
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);