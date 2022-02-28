import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCOCOp2S8u4pr8KzYdgYu5eiX6ok6rNoZQ",
  authDomain: "idobatakaigi-with-ham-56cfb.firebaseapp.com",
  projectId: "idobatakaigi-with-ham-56cfb",
  storageBucket: "idobatakaigi-with-ham-56cfb.appspot.com",
  messagingSenderId: "864769824608",
  appId: "1:864769824608:web:405d2d8a7a3467a3303005",
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const messagesRef = database.ref("messages");

export const pushMessage = ({ name, text }) => {
  messagesRef.push({ name, text })
}