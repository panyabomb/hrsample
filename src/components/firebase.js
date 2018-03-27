import {initializeApp} from 'firebase'

const app = initializeApp({
  apiKey: 'AIzaSyBz5HYDkiND9RXauapzCdf8Sq60I9T54p0',
  authDomain: 'hrweb-75bb2.firebaseapp.com',
  databaseURL: 'https://hrweb-75bb2.firebaseio.com',
  projectId: 'hrweb-75bb2',
  storageBucket: 'hrweb-75bb2.appspot.com',
  messagingSenderId: '388945134139'
})

export const db = app.database()
export const values = db.ref('data')
export const str = app.storage()
