import {
    getAuth,
} from 'https:/cdnjs.cloudflare.com/ajax/libs/firebase/9.9.2/firebase-auth.min.js';
import {
    getFirestore,
} from 'https:/cdnjs.cloudflare.com/ajax/libs/firebase/9.9.2/firebase-firestore.min.js';
import {
    initializeApp,
} from 'https:/www.gstatic.com/firebasejs/9.9.2/firebase-app.js';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBsmMw5DT-8p8JncZhtMrZApWQ80A-dZLE",
    authDomain: "neuretra.firebaseapp.com",
    projectId: "neuretra",
    storageBucket: "neuretra.appspot.com",
    messagingSenderId: "694260658104",
    appId: "1:694260658104:web:b040e0e542adb73275a94d",
    measurementId: "G-GMXLMN36P4"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);





//  login in