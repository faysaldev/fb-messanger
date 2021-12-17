import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCBIhcitZvfn5C5s28701i-cOmDx5BoTbs",
    authDomain: "facebook-massanger-b197a.firebaseapp.com",
    projectId: "facebook-massanger-b197a",
    storageBucket: "facebook-massanger-b197a.appspot.com",
    messagingSenderId: "62854949423",
    appId: "1:62854949423:web:a3126163bbc69dc0dd34da",
    measurementId: "G-7WTRWDKLRL"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const storage =firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider();
  export {auth,storage,provider};
  export default db;
