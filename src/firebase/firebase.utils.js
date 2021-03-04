import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyA_NX8t_Rf5DkMlFP9k8ypEXsLOA_8d_eY",
    authDomain: "angel-shop-94371.firebaseapp.com",
    projectId: "angel-shop-94371",
    storageBucket: "angel-shop-94371.appspot.com",
    messagingSenderId: "888991162482",
    appId: "1:888991162482:web:23b4b2daf8070c2a56a2eb"
  }

  firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prmopt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
