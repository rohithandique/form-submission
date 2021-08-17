import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"

const app = firebase.initializeApp({
    apiKey: "AIzaSyBGnFKIFcMP24Sse6t1ehlUUrKagDgN0L0",
    authDomain: "fir-auth-183aa.firebaseapp.com",
    projectId: "fir-auth-183aa",
    storageBucket: "fir-auth-183aa.appspot.com",
    messagingSenderId: "104082318288",
    appId: "1:104082318288:web:1817e5434d1c68da91cfd5"
})

export const auth = app.auth()
export const db = app.firestore();
db.settings({ timestampsInSnapshots: true, merge: true });
export default app;