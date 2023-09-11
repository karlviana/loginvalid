const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('submit', e => {e.preventDefault();
       validateInputs();
});

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    if(usernameValue === ''){
        setError(username, 'Please input username');
     }
     else {
         setSuccess(username);
     }

    if(passwordValue === ''){
        setError(password, 'Please input password');
     }
     else if (passwordValue.length < 8){
         setError(password, 'Password must be atleast 8 characters long');
     }
     else {
         setSuccess(password);
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