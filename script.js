const form = document.querySelector('#form')
const firstName = document.querySelector('#firstName')
const lastName = document.querySelector('#lastName')
const email = document.querySelector('#email')
const userArray = []


const validateText = (input) => {

    if(input.value.trim() === '') {
        setErrorFor(input,'Kan inte vara tomt')
        return false
    } else {
        setSuccessFor(input)
       return true;
    }
}
const validateEmail = (input) => {
    if(input.value.trim() === '') {
        setErrorFor(input,'Ange en epost')
        return false
        
    } else if (!isEmail(input.value.trim())){
        setErrorFor(input,'Ange en giltig epost')
        return false
        
    } else {
        setSuccessFor(email)
        return true
        
    }
}

function checkinputs() {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();

    if(firstNameValue === '') {
        setErrorFor(firstName,'Kan inte vara tomt')
        
    } else {
        setSuccessFor(firstName)
       return true;
    }

    if(lastNameValue === '') {
        setErrorFor(lastName,'Kan inte vara tomt')
       
    } else {
        setSuccessFor(lastName)
        
    }
    if(emailValue === '') {
        setErrorFor(email,'Ange en epost')
        
    } else if (!isEmail(emailValue)){
        setErrorFor(email,'Ange en giltig epost')
        
    } else {
        setSuccessFor(email)
        
    }
}

function setErrorFor(input,message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message;
    formControl.className = 'form-control error';
}
function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className  = 'form-control success';
}

function isEmail(email) {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
}
form.addEventListener('submit',(e) => {
    e.preventDefault()

    


    validateText(firstName)
    validateText(lastName)
    validateEmail(email)

    if( validateText(firstName) &&
        validateText(lastName) && 
        validateEmail(email))
         
        { const user = {
            
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value
        }
       
        userArray.push(user)
        document.getElementById("user").innerHTML += `${user.firstName} ${user.lastName}<br><p class="small-text">${user.email}</p>`;
        firstName.value = ''
        lastName.value = ''
        email.value = ''

      
        } 
      
        
    
})