import firebase from "firebase/app"
import "firebase/database"
import Rebase from "re-base"


const config = {
    apiKey: "AIzaSyBZQEDYJkJu29_NMXYRvxPLTm-fip8g9E8",
    authDomain: "wheretogo-213a1.firebaseapp.com",
    databaseURL: "https://wheretogo-213a1.firebaseio.com",
    projectId: "wheretogo-213a1",
    storageBucket: "wheretogo-213a1.appspot.com",
    messagingSenderId: "803139812233"
  };
  const app = firebase.initializeApp(config);


export default Rebase.createClass(app.database());


