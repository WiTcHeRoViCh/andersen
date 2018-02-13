import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyClLb9Im6RI_24KHgN2LWwram_ngnp0_y8",
  authDomain: "test-a6f15.firebaseapp.com",
  databaseURL: "https://test-a6f15.firebaseio.com",
  projectId: "test-a6f15",
  storageBucket: "test-a6f15.appspot.com",
  messagingSenderId: "325495527991"
};

firebase.initializeApp(config);

export default firebase;
