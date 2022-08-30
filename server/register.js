import {
  createUserWithEmailAndPassword,
  getAuth,
} from 'https:/cdnjs.cloudflare.com/ajax/libs/firebase/9.9.2/firebase-auth.min.js';
import {
  doc,
  setDoc,
} from 'https:/cdnjs.cloudflare.com/ajax/libs/firebase/9.9.2/firebase-firestore.min.js';

import {
  app,
  db,
} from './auth.js';

const auth = getAuth(app);


let registerNow = document.getElementById('register');

registerNow.addEventListener('click', () => {
  register();
});

async function register() {
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let fullname = document.getElementById('fullname').value;
  let username = document.getElementById('username').value;

  try {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    let userId = data.user.uid
    await setDoc(doc(db, 'users', userId), {name:fullname, username:username, email:email})
    alert("Account Created Succesfully")
    window.location.replace("./dashboard.html")
  } catch (err) {
    if(err.message == "Firebase: Error (auth/email-already-in-use)."){
      alert("Email is taken")
    }
  }
}
