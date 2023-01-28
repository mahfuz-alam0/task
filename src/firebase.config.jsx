import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC-xKAXfEOnjvtGZZrRSxkPLgiGXo2dRPM",
  authDomain: "info-task.firebaseapp.com",
  projectId: "info-task",
  storageBucket: "info-task.appspot.com",
  messagingSenderId: "223177621126",
  appId: "1:223177621126:web:4aba39650c116695ff5b07"
};


const app = initializeApp(firebaseConfig);

export default app;