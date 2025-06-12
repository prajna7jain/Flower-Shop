function showForm(type) {
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
}
document.getElementById("signinBtn").classList.add("active-btn");
