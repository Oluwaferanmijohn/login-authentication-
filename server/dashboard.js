import {
    onAuthStateChanged,
    signOut,
} from 'https:/cdnjs.cloudflare.com/ajax/libs/firebase/9.9.2/firebase-auth.min.js';
import {
    doc,
    getDoc,
} from 'https:/cdnjs.cloudflare.com/ajax/libs/firebase/9.9.2/firebase-firestore.min.js';

import {
    auth,
    db,
} from './auth.js';

let activeUser = ''

onAuthStateChanged(auth, (user) => {
    if (user != null) {
        activeUser = user.uid
        getUserData(activeUser);
    } else {
        window.location.replace('./login.html');
    }
});

let signoutnow = document.getElementById('logout');

signoutnow.addEventListener('click', () => {
    signOut(auth).then(() => {
        alert('You have Logged Out');
        window.location.replace('./login.html');
    });
});

let User = {};

async function getUserData(userId) {
    try {
        const docRef = doc(db, 'users', userId);
        const userData = await getDoc(docRef);
        User = userData.data()
        showUser(User)
            // console.log(User)
    } catch {
        // console.log(err)
    }

}


function showUser(userData) {
    let email = document.getElementById('email')
    let username = document.getElementById('username')
    let fullname = document.getElementById('fullname')

    email.innerText = userData.email;
    username.innerHTML = userData.username;
    fullname.innerHTML = userData.name;
}