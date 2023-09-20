const form = document.querySelector('#form');
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

// Usernames can only contain letters a-z in lowercase
const isValidUsername = () => /^[a-z]+$/.test(usernameInput.value);

// Password must contain a lowercase, uppercase letter and a number
const isValidPassword = () => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/.test(passwordInput.value);

// Email must contain an @ symbol and a domain name
const isValidEmail = () => /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailInput.value);

form.addEventListener('submit', (e)=> {

  const validator = (inputElement, validationFunction) => {
    if (validationFunction()) {
      inputElement.closest('label').className = 'valid'
      inputElement.nextElementSibling.style.display = 'none'
    } else {
      e.preventDefault()
      inputElement.closest('label').className = 'error'
      inputElement.nextElementSibling.style.display = 'block'
    }
  }



  validator(usernameInput, isValidUsername)
  validator(emailInput, isValidEmail)
  validator(passwordInput, isValidPassword)

})





// Add an event listener to the form listening for the submit event 
  
  // validate the username by calling the isValidUsername function
  // if the username is valid, 
    // add the class "valid" to the parent label of the input
  // else 
    // prevent the form from being submitted
    // set the class of the label to be "error"
    // change the display value of the span to show the hint to the user


  // validate the email by calling the isValidEmail function
    // apply the error or valid class based on the returned value


  // validate the password by calling the isValidPassword function
    // apply the error or valid class based on the returned value








      // if (isValidUsername()){
  //   // usernameInput.parentElement.classList.add('valid')
  //   usernameInput.closest('label').classList.add = 'valid'
  //   usernameInput.parentElement.querySelector('span').style.display = 'none'

  //   console.log(`valid name`)
  // } else {
  //   e.preventDefault()
  //   usernameInput.parentElement.classList.add('error')
  //   usernameInput.parentElement.querySelector('span').style.display = 'block'
  //   console.log(`invalid name`)
  // }

  // if (isValidEmail()){
  //   emailInput.parentElement.classList.add('valid')
  //   emailInput.parentElement.querySelector('span').style.display = 'none'
  //   console.log(`valid email`)
  // } else {
  //   e.preventDefault()
  //   emailInput.parentElement.classList.add('error')
  //   emailInput.parentElement.querySelector('span').style.display = 'block'
  //   console.log(`invalid email`)
  // }

  // if (isValidPassword()){
  //   passwordInput.parentElement.classList.add('valid')
  //   passwordInput.parentElement.querySelector('span').style.display = 'none'
  //   console.log(`valid password`)
  // } else {
  //   e.preventDefault()
  //   passwordInput.parentElement.classList.add('error')
  //   passwordInput.parentElement.querySelector('span').style.display = 'block'
  //   console.log(`invalid password`)
  // }