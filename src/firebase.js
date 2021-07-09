 import firebase from 'firebase/app'
 import 'firebase/auth'
const Config = {
    apiKey: "AIzaSyCPgEiRSV3iDkUt8DHAjnOyiTy52ewfHro",
    authDomain: "unichat-b2639.firebaseapp.com",
    projectId: "unichat-b2639",
    storageBucket: "unichat-b2639.appspot.com",
    messagingSenderId: "51486348651",
    appId: "1:51486348651:web:8f8c6cea6df0c1419a282e"
  };
  // Initialize Firebase
  firebase.initializeApp(Config);
  const auth = firebase.auth()

  export default firebase