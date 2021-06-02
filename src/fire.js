import firebase from "firebase/app"
import 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyCt50WDvKHcOKoeMqfjFRJhSpdh3nEjL1Q",
    authDomain: "react-task-manager-b936d.firebaseapp.com",
    projectId: "react-task-manager-b936d",
    storageBucket: "react-task-manager-b936d.appspot.com",
    messagingSenderId: "97707168423",
    appId: "1:97707168423:web:dee395f7632f993bf34182",
    databaseURL: "https://react-task-manager-b936d-default-rtdb.firebaseio.com/"
  };
// const fire =  firebase.initializeApp(firebaseConfig);
// export default fire.database().ref();

function initFirebase(){
  if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig); 
  }
}

initFirebase();

export {firebase} ;
    