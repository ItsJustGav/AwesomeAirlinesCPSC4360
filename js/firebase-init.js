// Load Firebase SDKs FIRST in HTML
// Then run this
const firebaseConfig = {
    apiKey: "AIzaSyCHQmUvs9M0R0wqZgibUpm9jm5xYSd_C3w",
    authDomain: "travsync-ea0c3.firebaseapp.com",
    projectId: "travsync-ea0c3",
    storageBucket: "travsync-ea0c3.appspot.com",
    messagingSenderId: "568862196424",
    appId: "1:568862196424:web:c04c1e271ff691daf6dbfd"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
