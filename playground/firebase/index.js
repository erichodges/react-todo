import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyD58o4roiGKhjLytYNQoHiH6J41W8sPfAM",
    authDomain: "todo-app-b8c23.firebaseapp.com",
    databaseURL: "https://todo-app-b8c23.firebaseio.com",
    storageBucket: "todo-app-b8c23.appspot.com",
  };
  firebase.initializeApp(config);

  var firebaseRef = firebase.database().ref();

  firebaseRef.set({
    app: {
      name: 'Todo App',
      version: '1.0.0'
    },
    isRunning: true,
    user: {
      name: 'Eric',
      age: 50
    }
  });




// firebaseRef.child('user').on('value', (snapshot) => {
//   console.log('Userref changed', snapshot.val());
// });
//
// firebaseRef.child('user').update({name: 'Mike'});
//
// firebaseRef.child('app').update({name: 'Something Else!'});


  // firebaseRef.child('app').once('value').then((snapshot) => {
  //   console.log('got entire database', snapshot.key, snapshot.val());
  // }, (e) => {
  //   console.log('Unable to fetch value', e);
  // });

// firebaseRef.on('value', (snapshot) => {
//   console.log('Got value', snapshot.val());
// });
//
// firebaseRef.off();
//
// firebaseRef.update({isRunning: false});




// firebaseRef.remove();  //This wipes the firebase database

// firebaseRef.child('app/name').remove();

// firebaseRef.update({
//   isRunning: null
// });
//
// firebaseRef.child('user/age').remove();

// firebaseRef.child('app').update({
//   version: '2.0',
//   name: null
// });

  // firebaseRef.update({
  //   'app/name': 'To Do Application',
  //   'user/name' : 'Jen'
  // });

// firebaseRef.child('app').update({ name: 'Todo Application' });
// firebaseRef.child('user').update({ name: 'Mike' });
