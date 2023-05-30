// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9wFI6jNBy2zHoEgZJe-FL_OCLTsc_g04",
  authDomain: "netflix-clone-9a421.firebaseapp.com",
  projectId: "netflix-clone-9a421",
  storageBucket: "netflix-clone-9a421.appspot.com",
  messagingSenderId: "96710933666",
  appId: "1:96710933666:web:c1da9be7115db0fc45ebfb"
}
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }