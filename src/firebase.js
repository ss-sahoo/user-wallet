import {getFirestore} from 'firebase/firestore';
import {initializeApp} from 'firebase/app';
var firebaseConfig ={
    apiKey: "AIzaSyCV_VlenAduqWsOijolIzCdXw0KAtwoHqY",
    authDomain: "user-amount-2fd37.firebaseapp.com",
    projectId: "user-amount-2fd37",
    storageBucket: "user-amount-2fd37.appspot.com",
    messagingSenderId: "709541794344",
    appId: "1:709541794344:web:0ee778ce8f43412e7edb1d"

};
  
const firebaseApp= initializeApp(firebaseConfig);
  // Get a Firestore instance
  var db = getFirestore(firebaseApp)

export { db };