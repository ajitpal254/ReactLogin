import firebase from 'firebase';
// Required for firebase side effects
require('firebase/firestore');
import auth from '@react-native-firebase/auth';

// const firebaseConfig = {
//     apiKey: "AIzaSyC7GM-ld43OpsiLyPl2G8rqz2pUmhlsm08",
//     authDomain: "loginfirebase234.firebaseapp.com",
//     projectId: "loginfirebase234",
//     storageBucket: "loginfirebase234.appspot.com",
//     messagingSenderId: "87433981635",
//     appId: "1:87433981635:web:be9397be0b6e177b72fc76",
//     measurementId: "G-Y4CXYMBT7C"
// };

const firebaseConfig = {
    apiKey: 'AAAABKYiVGc:APA91bEnFrP5-AAAAY3-_euU:APA91bEJOKEGupT7iwvvbz7141i5pm-dTlIB9xtpxp9nZh0zf6fLyshbO9Yy6RFVxn65M2kOAYUJ4zNMhMUd3X0O0lUqzZFv1y6O1kIgqsJbLtl67IGimvyvreMKwJlZT-QUxAY5KU--',
    authDomain: 'reactcart-5194a.firebaseapp.com',
    databaseURL: 'https://reactcart-5194a-default-rtdb.firebaseio.com/',
    projectId: 'reactcart-5194a',
    storageBucket: 'reactcart-5194a.appspot.com',
    appId: '1:427345017573:android:2856864cad0b72d4ccb20c',
  };

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}
else {
    firebase.app(); // if already initialized, use that one
 }


export default firebaseConfig;
