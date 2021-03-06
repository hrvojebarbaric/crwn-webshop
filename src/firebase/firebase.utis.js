import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyDsAqeqyPp1FrqfknBXqpDhHMju3eRg_A4",
    authDomain: "crwn-db-8f782.firebaseapp.com",
    databaseURL: "https://crwn-db-8f782.firebaseio.com",
    projectId: "crwn-db-8f782",
    storageBucket: "crwn-db-8f782.appspot.com",
    messagingSenderId: "576467916834",
    appId: "1:576467916834:web:4dd78770b9460da5d0d27b",
    measurementId: "G-3T9PXN9ZL5"
  };

  export const createUserProfileDocument = async (userAuth, aditionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`user/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    if(!snapShot.exists) {
      const {displayName, email} = userAuth;
      const dateCreated = new Date();
      try{
        await userRef.set({
          displayName,
          email,
          dateCreated,
          ...aditionalData
        })
      }catch(error){
        console.log(`this is a error!`,error.message);
      }
    }
    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;