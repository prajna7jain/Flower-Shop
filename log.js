

    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js";
    import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

    const firebaseConfig = {
      apiKey: "AIzaSyA9iZT8WKPIG9ZJmgxryOqG1lvjYxsl-GE",
      authDomain: "flower-shop-788d1.firebaseapp.com",
      projectId: "flower-shop-788d1",
      storageBucket: "flower-shop-788d1.appspot.com",
      messagingSenderId: "768581596056",
      appId: "1:768581596056:web:dcde445a10c4dca68fb1ed",
      measurementId: "G-G7XGJDN733"
    };

    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const auth = getAuth(app);
    import { getAuth, onAuthStateChanged } from "firebase/auth";
 
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});

    document.getElementById("registerBtn").addEventListener("click", () => {
      const email = document.getElementById("signup-email").value;
      const password = document.getElementById("signup-password").value;
      createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          alert("Registration Successful!");
          showForm('signin');
        })
        .catch(error => {
          alert("Error: " + error.message);
        });
    });

    document.getElementById("loginBtn").addEventListener("click", () => {
      const email = document.getElementById("signin-email").value;
      const password = document.getElementById("signin-password").value;
      signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          alert("Login Successful!");
          window.location.href = "index.html";
        })
        .catch(error => {
          alert("Login Failed: " + error.message);
        });
    });
    import { getAuth, onAuthStateChanged } from "firebase/auth";

    

    window.showForm = function(type) {
      const signInForm = document.getElementById("signin-form");
      const signUpForm = document.getElementById("signup-form");
      const signInBtn = document.getElementById("signinBtn");
      const signUpBtn = document.getElementById("signupBtn");

      if (type === 'signin') {
        signInForm.classList.add("active");
        signUpForm.classList.remove("active");
        signInBtn.classList.add("active-btn");
        signUpBtn.classList.remove("active-btn");
      } else {
        signUpForm.classList.add("active");
        signInForm.classList.remove("active");
        signUpBtn.classList.add("active-btn");
        signInBtn.classList.remove("active-btn");
      }
    };
    document.getElementById("signinBtn").classList.add("active-btn");
 