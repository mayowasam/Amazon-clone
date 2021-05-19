import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optiona
    apiKey: "AIzaSyCtWPZ4OS-IXy6J_YLuuZwFtBySafdeLcc",
    authDomain: "amzon-clone-7e423.firebaseapp.com",
    projectId: "amzon-clone-7e423",
    storageBucket: "amzon-clone-7e423.appspot.com",
    messagingSenderId: "888870633150",
    appId: "1:888870633150:web:b2100c382d46b39331a8ef",
    measurementId: "G-F7ZBBP7TD8"
})

const auth = firebase.auth()

export {auth}