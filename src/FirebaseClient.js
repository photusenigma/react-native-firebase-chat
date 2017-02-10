const firebase = require('firebase')
    // import { API_KEY } from 'react-native-dotenv'

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCdqvrAF9Mztpfy6rCxAJX3AAxG4oLoSV8",
    authDomain: "simplechat-9e92b.firebaseapp.com",
    databaseURL: "https://simplechat-9e92b.firebaseio.com",
    storageBucket: "simplechat-9e92b.appspot.com",
    messagingSenderId: "134578640171"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp