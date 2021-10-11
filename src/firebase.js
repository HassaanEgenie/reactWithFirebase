// Import the functions you need from the SDKs you need
// import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {UserSignIn,UserInfo} from "./Actions";
import { getAuth , onAuthStateChanged,signInWithEmailAndPassword ,createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//Youtube API Key    AIzaSyB3RT854pKnimj_zHZfzJTSDQ1w0Es0zPk;
const firebaseConfig = {
  apiKey: "AIzaSyAozOna13Xr_LCboO7OiyMEQK11e_0KDv8",
  authDomain: "nextjsproject-ae2bb.firebaseapp.com",
  projectId: "nextjsproject-ae2bb",
  storageBucket: "nextjsproject-ae2bb.appspot.com",
  messagingSenderId: "430160898712",
  appId: "1:430160898712:web:b883de5b90beb12f29beed",
  measurementId: "G-CD2J0SLN61"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth=getAuth();
 
export const register_with_firebase=(email,password)=>{

    createUserWithEmailAndPassword (auth,email, password)
    .then((userCredential) => {
      // Signed in 
        const user = userCredential.user;
        console.log("createUserWithEmailAndPassword",user);
        return user;
      // ...
    })
    .catch((error) => {
      console.log("error");
      const errorCode = error.code;
      const errorMessage = error.message;
      return errorMessage;
    });
    
}

export  function signin_with_firebase(email, password){


     signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("signInWithEmailAndPassword ",user);
            })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                });
       
      
   
}

export const check_signin=()=>{
 
    onAuthStateChanged(auth, (user) => {
      if (user) {
       
        console.log("the signed in user is",user);
        
      
        // ...
      } else {
        console.log("User is signed out");
        // User is signed out
        // ...
      }
    });
}

