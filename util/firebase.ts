import { initializeApp, getApps, getApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDw5sgzR2mdpQzDabiDlbEC5fkefWdy_SQ",
  authDomain: "next-auth-running.firebaseapp.com",
  projectId: "next-auth-running",
  storageBucket: "next-auth-running.appspot.com",
  messagingSenderId: "367562942501",
  appId: "1:367562942501:web:591d5a11d1c426dc4177cc",
  measurementId: "G-8LNPB4EXBV"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db }
