import firebase from "firebase"
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD74M6VDksRzvt9WwHxargqfk3x-_kMbxA",
    authDomain: "artstore-c1aa0.firebaseapp.com",
    projectId: "artstore-c1aa0",
    storageBucket: "artstore-c1aa0.appspot.com",
    messagingSenderId: "648589567853",
    appId: "1:648589567853:web:9654d645843f6513735c64"
};
  
const app = firebase.initializeApp(firebaseConfig)

export function getFirestore() {
    return firebase.firestore(app)
}