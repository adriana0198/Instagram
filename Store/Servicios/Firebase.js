import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCgGQuvTC6IN83iSRds-NovWkR9bBwVfEE",
    authDomain: "instagram-e1b2f.firebaseapp.com",
    databaseURL: "https://instagram-e1b2f.firebaseio.com",
    projectId: "instagram-e1b2f",
    storageBucket: "instagram-e1b2f.appspot.com",
    messagingSenderId: "239451686244"
  };
  firebase.initializeApp(config);

 export const autenticacion = firebase.auth();
export const baseDeDatos = firebase.database();

