import {
  getAuth,
  signInWithEmailAndPassword,
} from 'https:/cdnjs.cloudflare.com/ajax/libs/firebase/9.9.2/firebase-auth.min.js';

import { app } from './auth.js';

const auth = getAuth(app);




let loginBtn = document.getElementById('login');

loginBtn.addEventListener('click', () => {
  Login();
});

async function Login() {
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;

  try {
    const data = await signInWithEmailAndPassword(auth, email, password);
    console.log(data)
    let activeUser = data.user.uid
    window.location.replace("./dashboard.html")
  } catch (err) {
    console.log(err.message);
  }
}
