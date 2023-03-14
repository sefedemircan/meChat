import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyD-eNcRG7tBaLpvZCaNAZJJtzppi8eHH3U",
    authDomain: "mechat-cae72.firebaseapp.com",
    projectId: "mechat-cae72",
    storageBucket: "mechat-cae72.appspot.com",
    messagingSenderId: "540683785107",
    appId: "1:540683785107:web:95ecdc456963ebd3a38e66"
};

firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {
projectFirestore, timestamp, projectAuth
};