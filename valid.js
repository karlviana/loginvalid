const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const username = document.getElementById('username');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


form.addEventListener('submit', e => {e.preventDefault();
      validateInputs();
      form.reset();
});

firstname.addEventListener('input', validateFName) 

  function validateFName(){
    if(firstname.value === ''){
        setError(firstname, 'Firstname is required');
    }
    else if (!setName(firstname.value)){
        setError(firstname, 'Please input valid firstname');
    }

    else {
        setSuccess(firstname);
    } 
  }

const validateInputs = () => {
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(firstnameValue === ''){
        setError(firstname, 'Firstname is required');
    }
    else if (!setName(firstnameValue)){
        setError(firstname, 'Please input valid firstname');
    }

    else {
        setSuccess(firstname);
    } 

    if(lastnameValue === ''){
        setError(lastname, 'Lastname is required');
    }
    else if (!setName(lastnameValue)){
        setError(lastname, 'Please input valid lastname');
    }
    else {
        setSuccess(lastname);
    }

    if(usernameValue === ''){
       setError(username, 'Username is required');
    }
    else {
        setSuccess(username);
    }

    if(emailValue === ''){
        setError(email, 'Email is required');
     }
     else {
         setSuccess(email);
     }

     if(passwordValue === ''){
        setError(password, 'Password is required');
     }
     else if (passwordValue.length < 8){
         setError(password, 'Password must be atleast 8 characters long');
     }
     else {
         setSuccess(password);
     }

     if(password2Value === ''){
        setError(password2, 'Password is required');
     }
     else if (password2Value !== passwordValue){
         setError(password2, 'Password Doesnt match');
     }
     else {
         setSuccess(password2);
     } 
}

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.remove('success');
    inputControl.classList.add('error');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const setName = (firstname,lastname) => {
      const re = /^[A-Za-z ]+$/;
      return re.test(firstname,lastname);
}
