const form = document.getElementById('form')
const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const email = document.getElementById('email')
const userArray = ['']
const userNumber = Math.floor((Math.random()*1000)+1)
console.log(userNumber)

form.addEventListener('submit',(e) => {
    e.preventDefault();

    checkInputs();

})

function checkInputs() {
    const firstNameValue = firstName.value.trim()
    const lastNameValue = lastName.value.trim()
    const emailValue= email.value.trim()

    if (firstName.value === '') {
        
        setErrorFor(firstName,'kan inte vara blankt')
    }else {
        
        setSuccessFor(firstName);
    }
    if(lastNameValue === '') {
        setErrorFor(lastName,'kan inte vara blankt')
    } else {
        setSuccessFor(lastName)
    }
    if(emailValue ==='') {
        setErrorFor(email, 'Ange en epost')
    } else if (!validEmail(emailValue))
    setErrorFor(email, 'Ange en giltig epost')

    else {
        setSuccessFor(email)
    }
} 
function setErrorFor(input,message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';
}

function setSuccessFor (input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
function validEmail (email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

