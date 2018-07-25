import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCCpSBPZmrWX2GDdnJ9MTrEZLw4OTM9SRQ",
  authDomain: "expensify-app-9da7d.firebaseapp.com",
  databaseURL: "https://expensify-app-9da7d.firebaseio.com",
  projectId: "expensify-app-9da7d",
  storageBucket: "expensify-app-9da7d.appspot.com",
  messagingSenderId: "614404121319"
};

firebase.initializeApp(config);

firebase.database().ref().set({
  name: 'Raul Barboza'
})
