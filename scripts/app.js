const firebase = require("firebase");
const { config } = require("node:process");
// Required for side-effects
require("firebase/firestore");


const firebaseConfig = {
    apiKey: "AIzaSyA9NLadyLIAWoaQJTUELB3-7JkVZjQWzl4",
    authDomain: "likey-77632.firebaseapp.com",
    databaseURL: "https://likey-77632-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "likey-77632",
    storageBucket: "likey-77632.appspot.com",
    messagingSenderId: "601475169325",
    appId: "1:601475169325:web:8d2bbb30819a0cb4568ca4",
    measurementId: "G-XT57VJ95YH"
  };

  firebase.initializeApp(config);

firebase.initializeApp({
    apiKey: 'AIzaSyA9NLadyLIAWoaQJTUELB3-7JkVZjQWzl4',
    authDomain: 'likey-77632.firebaseapp.com',
    projectId: 'likey-77632'
  });

  var db = firebase.firestore();  