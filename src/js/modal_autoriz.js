import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword ,signOut,onAuthStateChanged} from "firebase/auth";
import { getDatabase, ref, set, child, get } from "firebase/database";
import Notiflix from "notiflix";

const firebaseConfig = {
  apiKey: "AIzaSyBx4zf6NHwO4OZAhfdRwgnrw82frbnmrqE",
  authDomain: "authfun-db86b.firebaseapp.com",
  projectId: "authfun-db86b",
  storageBucket: "authfun-db86b.appspot.com",
  messagingSenderId: "633729331271",
  appId: "1:633729331271:web:52edc53f6e9f6aae5cc162",
  databaseURL: 'https://authfun-db86b-default-rtdb.europe-west1.firebasedatabase.app/'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase(app);



const formRegRef = document.querySelector('.sign-up')
const formLogRef=document.querySelector('.sign-in')
const signUpLink = document.querySelector('.sing-up-link')
const signInLink = document.querySelector('.sing-in-link')
const backdropRef=document.querySelector('.backdrop-auth')
const inputElements = document.querySelectorAll('.input-login');
const labelElement = document.querySelectorAll('.label');
const modalAuthCloseBtnRef = document.querySelector('.modal-auth-close-btn')
const menuMobileRef=document.querySelector('.js-menu-container')

// **header
const signUpHomeBtn = document.querySelector('.btn-header')
const signedBtnHeaderRef=document.querySelector('.btn-header.loginned')
const headerNavLinks= document.querySelector('.header-nav-link')
const logOutBtn = document.querySelector('.btn-header-mobile')
const mobileSignInREf = document.querySelector('.log-in-mob')
const mobileNavLinks1 = document.querySelector('.mobile-link.mobile-margin')
const mobileNavLinks2 = document.querySelector('.js-link')

// **Fav Modal
const addToShoppingLishBtn=document.querySelector('.fav-add-book-btn')





formRegRef.addEventListener('submit', createNewAcc);
formLogRef.addEventListener('submit', loginInAcc);
signInLink.addEventListener('click', showSignInForm);
signUpLink.addEventListener('click', showSignIUpForm);
modalAuthCloseBtnRef.addEventListener('click', onModalAuthCloseBtn)
 

// **HOME
signUpHomeBtn.addEventListener('click', () => {
    backdropRef.classList.remove('is-hidden')
})

logOutBtn.addEventListener('click', logOut)
mobileSignInREf.addEventListener('click',() => {
    backdropRef.classList.remove('is-hidden')
})

// ***




inputElements.forEach((el,i) => {
    el.addEventListener("input", function() {
    if (el.value !== "") {
         labelElement[i].classList.add("input-filled");
  } else {
    labelElement[i].classList.remove("input-filled");
  }
})

});


signedBtnHeaderRef.addEventListener('click', showLogOut)

function showLogOut() {
    


}



function onModalAuthCloseBtn(){
     backdropRef.classList.add('is-hidden')
    formLogRef.reset()
    formRegRef.reset()

    labelElement.forEach(el => {
        el.classList.remove('input-filled')
    })
}




onAuthStateChanged(auth, (user) => {
  if (user) {
   
      const uid = user.uid;
      isAuth(uid)
      backdropRef.classList.add('is-hidden')
      logOutBtn.classList.remove('is-hidden')
      mobileSignInREf.classList.add('is-hidden')
      
       mobileNavLinks1.classList.remove('is-hidden')
    mobileNavLinks2.classList.remove('is-hidden')
    addToShoppingLishBtn.classList.remove('is-hidden')

   
  } else {
      signUpHomeBtn.classList.remove('is-hidden')
      signedBtnHeaderRef.classList.add('is-hidden')
      headerNavLinks.classList.add('is-hidden')
      mobileNavLinks1.classList.add('is-hidden')
      mobileNavLinks2.classList.add('is-hidden')

      mobileSignInREf.classList.remove('is-hidden')
    logOutBtn.classList.add('is-hidden')
    addToShoppingLishBtn.classList.add('is-hidden')
      
  }
});

  

function showSignInForm(e) {
    e.preventDefault()

    formRegRef.classList.add('is-hidden')
    formLogRef.classList.remove('is-hidden')

}

function showSignIUpForm(e) {
    e.preventDefault()

    formRegRef.classList.remove('is-hidden')
    formLogRef.classList.add('is-hidden')

}


async function loginInAcc(e) {
    e.preventDefault();

    const {
    elements: { userEmail,userName,userPassword}
    } = e.currentTarget;
    
    const loginEmail = userEmail.value;
    const loginPassword = userPassword.value

    
    try {
        const userCregential=await signInWithEmailAndPassword(auth,loginEmail,loginPassword)
      
        const userUid = userCregential.user.uid;




    console.log('U a Loggined');
    localStorage.setItem('isAuthenticated', JSON.stringify(true))
        backdropRef.classList.add('is-hidden')
        
       isAuth(userUid)

    formRegRef.reset()
    formLogRef.reset()
    } catch (error) {
        console.log(error);
    }
   
 }

async function createNewAcc(e) {
      e.preventDefault();

    const {
    elements: { userEmail,userName,userPassword}
    } = e.currentTarget;
    
    const loginEmail = userEmail.value;
    const loginPassword = userPassword.value
    const userFullName = userName.value
    
    try {
        if (userFullName === '') {
            Notiflix.Notify.failure('Write your Name');
          return
        }
    
        const userCregential = await createUserWithEmailAndPassword(auth, loginEmail, loginPassword);
        const userUid=userCregential.user.uid
        localStorage.setItem("userName", userFullName);
        localStorage.setItem('isAuthenticated', JSON.stringify(true))
        console.log(userCregential.user);

        writeUserData(userUid, userFullName)
        


        console.log('u a create acc!');
        isAuth(userUid)
        backdropRef.classList.add('is-hidden')
        formRegRef.reset()
        formLogRef.reset()
        Notiflix.Notify.success('You successfuly create Accaunt!');
    } catch (error) {
        console.log(error);
        Notiflix.Notify.failure('Something goes wrong!Try again');
    }
 }

async function logOut() {
    
    await signOut(auth)
    Notiflix.Notify.success('You successfuly LogedOut!');
    menuMobileRef.classList.remove('is-open')
    
    
};




function isAuth(uid) {

    
const dbRef = ref(getDatabase(app));
    get(child(dbRef, `users/${uid}`)).then((snapshot) => {
        if (snapshot.exists()) {
            const userName=сutName(snapshot.val().username)

            const test = `<svg class="user-icon" width="20" height="20"><use href="../images/sprite.svg#icon-user-1"></use></svg>${userName}`;
            
            signedBtnHeaderRef.innerHTML = test;


           
            // const userNameBtn = document.createElement("p");
            // userNameBtn.textContent = сutName(`${snapshot.val().username}`);
            // signedBtnHeaderRef.append(userNameBtn)
     
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});
   
    headerNavLinks.classList.remove('is-hidden')
    mobileNavLinks1.classList.remove('is-hidden')
    mobileNavLinks2.classList.remove('is-hidden')

    signUpHomeBtn.classList.add('is-hidden')
    signedBtnHeaderRef.classList.remove('is-hidden-btn');
    signedBtnHeaderRef.classList.remove('is-hidden');
    
}

function сutName(name) {
  if (name.length > 7) {
    return name.substring(0, 7) + "...";
  } else {
    return name;
  }
}




function writeUserData(uid,name) {
  
  set(ref(database, 'users/' + uid), {
    username: name,
  });
}

