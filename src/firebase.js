import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyDiEJv8e4wtog83dES7YhAh-bOOk-OkdMU",
    authDomain: "slackclone-7ab73.firebaseapp.com",
    projectId: "slackclone-7ab73",
    storageBucket: "slackclone-7ab73.appspot.com",
    messagingSenderId: "834625230694",
    appId: "1:834625230694:web:465aa5c1387b89c2661aa7",
    measurementId: "G-9R2Q1MKZEN"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;
  