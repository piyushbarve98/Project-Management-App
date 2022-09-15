import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDS8hEWl1UppTn2FWX4MWrk5KuNRfWDtnQ",
  authDomain: "project-management-app-6844c.firebaseapp.com",
  projectId: "project-management-app-6844c",
  storageBucket: "project-management-app-6844c.appspot.com",
  messagingSenderId: "284155994703",
  appId: "1:284155994703:web:591c5be79344cc929f403a"
}

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()