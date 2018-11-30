import * as firebase from 'firebase';
import 'firebase/storage';

const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID
};

firebase.initializeApp(config);
const database = firebase.database();
var storage = firebase.storage();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, storage, database as default };


// database.ref('expenses').on('value', (dataSnapshot) => {
//     const expenses = [];
//     dataSnapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     })
//     console.log(expenses);
//   })


// database.ref('expenses').push({
//   description: 'suco',
//   note: 'suco laranja',
//   amount: 600,
//   createdAt: 976123498740
// })

// firebase.database().ref('expenses').set({
//   name: 'Raul Barboza'
// })
