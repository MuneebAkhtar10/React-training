import * as firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

   // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD701I4WqwGDUx9QAIRjwLVCNvCzEhxwdE",
    authDomain: "react-final-ffb88.firebaseapp.com",
    databaseURL: "https://react-final-ffb88.firebaseio.com",
    projectId: "react-final-ffb88",
    storageBucket: "react-final-ffb88.appspot.com",
    messagingSenderId: "214758004978",
    appId: "1:214758004978:web:abc3c2ac7fd7142fe4d86b",
    measurementId: "G-V3MW2C9TD3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ experimentalForceLongPolling: true });
//   firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;