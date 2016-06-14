import firebase from 'firebase';

try {
  var config = {
      apiKey: "AIzaSyD58o4roiGKhjLytYNQoHiH6J41W8sPfAM",
      authDomain: "todo-app-b8c23.firebaseapp.com",
      databaseURL: "https://todo-app-b8c23.firebaseio.com",
      storageBucket: "todo-app-b8c23.appspot.com",
    };
    firebase.initializeApp(config);
} catch (e) {

}

  export var firebaseRef = firebase.database().ref();
  export default firebase;
