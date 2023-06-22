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
    const menuMobileRef = document.querySelector('.js-modal')
    

    

    // **header
    const signedBtnHeaderRef=document.querySelector('.js-signed-home-btn')
    const headerNavLinks= document.querySelector('.header-nav-item')
    const logOutBtn = document.querySelector('.header-user-modal-out')
    const mobileSignInREf = document.querySelector('.header-user-modal.js-modal-autoriz-open')
    const mobileNavLinks = document.querySelector('.header-nav-item-modal')
    const signUpHomeBtn=document.querySelector('.js-modal-autoriz-open')
    const headerDeskLogOut=document.querySelector('.header-user.js-modal-autoriz-open.js-logout')
    const headerLogOutBtn = document.querySelector('.js-logout')
    const burgerBtn = document.querySelector('.js-open-menu');
    const mobileUserWellcome = document.querySelector('.mob-user-name')
    
   




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
    headerLogOutBtn.addEventListener('click', logOut)


    
    mobileSignInREf.addEventListener('click',() => {
        backdropRef.classList.remove('is-hidden')
        console.log('click');
    })

    
   




    inputElements.forEach((el,i) => {
        el.addEventListener("input", function() {
        if (el.value !== "") {
             labelElement[i].classList.add("input-filled");
      } else {
        labelElement[i].classList.remove("input-filled");
      }
    })

    });



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
          cleanMarkup()
    
          const uid = user.uid;
          isAuth(uid)

          logOutBtn.classList.remove('is-hidden')
          mobileSignInREf.classList.add('is-hidden')
        
        mobileNavLinks.classList.remove('is-hidden')
        mobileUserWellcome.classList.remove('is-hidden')
             
    
        
        
console.log('you in');
    
      } else {
          console.log('you out');
          
          signUpHomeBtn.classList.remove('is-hidden')
          signedBtnHeaderRef.classList.add('is-none')
          headerNavLinks.classList.add('is-hidden')
        mobileNavLinks.classList.add('is-hidden')
        
        //  
               cleanMarkup()
          
          mobileSignInREf.classList.remove('is-hidden')
          logOutBtn.classList.add('is-hidden')
        headerLogOutBtn.classList.add('hidden-log')
        mobileUserWellcome.classList.add('is-hidden')
        
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
          Notiflix.Notify.success('You successfuly LogedIn!');

        localStorage.setItem('isAuthenticated', JSON.stringify(true))
            backdropRef.classList.add('is-hidden')
            
           isAuth(userUid)

        formRegRef.reset()
        formLogRef.reset()
        } catch (error) {
            console.log(error);
            Notiflix.Notify.failure('Something goes wrong!Try again');
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
        menuMobileRef.style.display = 'none';
        burgerBtn.classList.remove('hidden');
        localStorage.setItem('isAuthenticated', JSON.stringify(false))
        
        
};
    

function cleanMarkup() {
  signedBtnHeaderRef.innerHTML=''
  mobileUserWellcome.innerHTML=''
}

function createSignedInBtnMarkuo(userName) {
   let useUserIcon = document.createElement('img');
              useUserIcon.classList='user-icon'
              useUserIcon.width='30'
              useUserIcon.height='30'
              useUserIcon.src = new URL('../images/user.svg', import.meta.url);
              signedBtnHeaderRef.appendChild(useUserIcon);

              let userNameInBtn=document.createElement('p');
              userNameInBtn.textContent=userName;
              signedBtnHeaderRef.appendChild(userNameInBtn);

              let arrDown=document.createElement('img')
              arrDown.src=new URL('../images/arr-down-user.svg', import.meta.url);
              arrDown.width='14'
              arrDown.height='7'
              arrDown.classList='user-icon-down'
              signedBtnHeaderRef.appendChild(arrDown);
}


function mobSignedUserMarkup(userName) {
 let useUserIconMob = document.createElement('img');
              useUserIconMob.classList='user-icon'
              useUserIconMob.width='30'
              useUserIconMob.height='30'
              useUserIconMob.src = new URL('../images/user.svg', import.meta.url);
              mobileUserWellcome.appendChild(useUserIconMob);

              let userNameInBtnMob=document.createElement('p');
              userNameInBtnMob.textContent=userName;
              mobileUserWellcome.appendChild(userNameInBtnMob);
  
}


    function isAuth(uid) {

        
    const dbRef = ref(getDatabase(app));
        get(child(dbRef, `users/${uid}`)).then((snapshot) => {
            if (snapshot.exists()) {
              const userName = сutName(snapshot.val().username)
              
              cleanMarkup()
              createSignedInBtnMarkuo(userName)
              mobSignedUserMarkup(userName)
        
              const userIconDown = document.querySelector('.user-icon-down')
              signedBtnHeaderRef.addEventListener('click', showLogOut)
              
              function showLogOut() { 
      headerDeskLogOut.classList.toggle('hidden-log')
     userIconDown.classList.toggle('up')

    }
        
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
    
        headerNavLinks.classList.remove('is-hidden')
        

        signUpHomeBtn.classList.add('is-hidden')
        signedBtnHeaderRef.classList.remove('is-none');
        
        
    }

function сutName(name) {
  const splitted = name.split("")


const first = splitted[0].toUpperCase()

const rest = [...splitted] 
rest.splice(0, 1)

const result = [first, ...rest].join("")    
  
      if (result.length > 7) {
        return name.substring(0, 7) + "...";
      } else {
        return result;
      }
    }


 function writeUserData(uid,name) {
    
      set(ref(database, 'users/' + uid), {
        username: name,
      });
    }
