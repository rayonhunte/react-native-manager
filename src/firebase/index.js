import firebase from 'firebase';

firebaseInit = () =>{
  firebase.initializeApp({
    apiKey: "AIzaSyDW6U7Zr-vRQdvbW2BwQYu_SYhxtZvJNtU",
    authDomain: "manager-b3efa.firebaseapp.com",
    databaseURL: "https://manager-b3efa.firebaseio.com",
    projectId: "manager-b3efa",
    storageBucket: "",
    messagingSenderId: "56474819802"
  })
}

export  { firebaseInit } ;

