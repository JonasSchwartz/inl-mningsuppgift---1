const form = document.getElementById('form')
const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const email = document.getElementById('email')

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});
const setError = (element,message) => {
const inputControl = element.parentElement;
const errorDisplay = inputControl.querySelector('.error');

errorDisplay.innerText = message;
inputControl.classList.add('error')
inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.innerText = '';
    inputControl.classList.add('success')
    inputControl.classList.remove('error')
}
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}



const validateInputs = () => {
const firstNameValue = firstName.value.trim();
const lastNameValue = lastName.value.trim();
const emailValue = email.value.trim();
}

if(firstNameValue === '') {
    setError(firstname,'Ange ett förnamn')

} else {
setSuccess(firstname)
}

if (emailValue === '') {
    setError(email,'Ange en epost')
}else if (!isValidEmail(emailValue)) {
    setError(email,'Ange en giltig epost')
} else {
    setSuccess(email)
}