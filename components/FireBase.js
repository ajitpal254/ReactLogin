import * as firebase from 'firebase';
import auth from '@react-native-firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC7GM-ld43OpsiLyPl2G8rqz2pUmhlsm08",
    authDomain: "loginfirebase234.firebaseapp.com",
    projectId: "loginfirebase234",
    storageBucket: "loginfirebase234.appspot.com",
    messagingSenderId: "87433981635",
    appId: "1:87433981635:web:be9397be0b6e177b72fc76",
    measurementId: "G-Y4CXYMBT7C"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}


export default firebase;
