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

const secondaryAppConfig = {
    apiKey: "AIzaSyBaeswsMcSgwOzLsjcYlwZ3NHMWFn7_SmU",
    authDomain: "form-submission-function.firebaseapp.com",
    projectId: "form-submission-function",
    storageBucket: "form-submission-function.appspot.com",
    messagingSenderId: "640798607971",
    appId: "1:640798607971:web:b3c778dfef96ae18394656"
};

const secondaryApp = firebase.initializeApp(secondaryAppConfig, "secondary");

export const secondaryDb = secondaryApp.firestore();

export const auth = app.auth()
export const db = app.firestore();
db.settings({ timestampsInSnapshots: true, merge: true });
export default app;