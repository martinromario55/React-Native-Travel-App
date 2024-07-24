// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDsC-ePAfkiVaa8CBPsx4WA6rEPowdGQlg',
  authDomain: 'ai-travel-app-46411.firebaseapp.com',
  projectId: 'ai-travel-app-46411',
  storageBucket: 'ai-travel-app-46411.appspot.com',
  messagingSenderId: '1017417461818',
  appId: '1:1017417461818:web:71f2a5036f7d1ea2f70503',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
