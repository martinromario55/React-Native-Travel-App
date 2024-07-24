import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { auth } from '@/../../configs/FirebaseConfig'

export async function createAccount(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Signed up
      const user = userCredential.user
      console.log('User:', user)
      // ...
    })
    .catch(error => {
      const errorCode = error.code
      const errorMessage = error.message
      console.error('Error creating account:', errorCode, errorMessage)
      // ..
    })
}

export async function signinUser(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Signed in
      const user = userCredential.user
      console.log('User:', user)
      // ...
    })
    .catch(error => {
      const errorCode = error.code
      const errorMessage = error.message
      // console.error('Error signing in:', errorCode, errorMessage)
    })
}
