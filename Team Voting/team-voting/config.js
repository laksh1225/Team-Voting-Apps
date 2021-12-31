import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA3OBrEaN7W9NdfEaCH0ds2k6HQXtZS2I4",
  authDomain: "team-voting-c55b6.firebaseapp.com",
  databaseURL: "https://team-voting-c55b6-default-rtdb.firebaseio.com",
  projectId: "team-voting-c55b6",
  storageBucket: "team-voting-c55b6.appspot.com",
  messagingSenderId: "912414171530",
  appId: "1:912414171530:web:4b5549bf07a8c2782ba873"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();