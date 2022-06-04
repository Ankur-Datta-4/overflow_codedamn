// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {GoogleAuthProvider,getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC5T6CjnYaFtSA_gPmHPyitl15sunkpsTg",
  authDomain: "overflow-8c995.firebaseapp.com",
  projectId: "overflow-8c995",
  storageBucket: "overflow-8c995.appspot.com",
  messagingSenderId: "793433157691",
  appId: "1:793433157691:web:6105d42caf1c964571ec1e",
  measurementId: "G-JED2W8EPLQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth=getAuth();
const provider=new GoogleAuthProvider();

export {app,auth,provider};
