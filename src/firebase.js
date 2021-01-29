import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDoGQ1MpxyHd6wub4dLvYp0Um8Jp0vYeq0",
    authDomain: "tinder-clone-47b26.firebaseapp.com",
    projectId: "tinder-clone-47b26",
    storageBucket: "tinder-clone-47b26.appspot.com",
    messagingSenderId: "551646650063",
    appId: "1:551646650063:web:83cdacd333231588d8e1ba",
    measurementId: "G-6NLZPFP85C"
  };

  const firebasApp = firebase.initializeApp(firebaseConfig);

  const database = firebasApp.firestore();

  export default database;