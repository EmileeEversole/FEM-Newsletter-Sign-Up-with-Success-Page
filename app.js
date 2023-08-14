const form = document.querySelector('form');
const errorMsg = document.querySelector('.error-message');
const successToggle = document.querySelector('.success');
const signupToggle = document.querySelector('.sign-up');
const resetBtn = document.querySelector('.reset-btn');
const userEmail = document.querySelector('.user-email');
const inputEmail = document.querySelector('input');

// validate email upon form submission //
form.addEventListener('submit', validateEmail);

// email validation //
function validateEmail (e) {

  // prevent default validation/actions //
  e.preventDefault();

  const input = document.querySelector("input");
  const regEx = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  const email = document.querySelector('.email');

  // error //
  if (!regEx.test(input.value)) {
    form.classList.add('error');
  }

  // validated //
  else{
    form.classList.remove('error');
    successToggle.classList.add('toggle-success');
    signupToggle.classList.add('toggle-signup');

    userEmail.innerText = inputEmail.value;
  }
  // reset email field //
  input.value = '';
};

// return to start page //
resetBtn.addEventListener('click', () => {
  successToggle.classList.remove('toggle-success');
  signupToggle.classList.remove('toggle-signup');
});