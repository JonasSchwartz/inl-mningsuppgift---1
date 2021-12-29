const regForm = document.querySelector('#regForm');
const email = document.querySelector('#email')

const validate = (id) => {
let input = document.querySelector(id)
if(input.value === '' || input.value.lenght < 2) {
    input.classList.remove('is-valid')
    input.classList.add('is-invalid')
    input.focus()
    return false;
    } else {
        input.classList.remove('is-invalid')
        input.classList.add('is-valid')
        return true;
    }
}
       
const validateEmail = (emailInput) => {
let regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
if (regEx.test(emailInput.value)) {
    emailInput.classList.add('is-valid')
    emailInput.classList.remove('is-invalid')
    return true;
} 
else {
    emailInput.classList.remove('is-valid')
    emailInput.classList.add('is-invalid');
    emailInput.focus();
    return false;
}
}

regForm.addEventListener('submit',e => {
    e.preventDefault();

    const users = []
    
    for(let i = 0; i < e.currentTarget.length;i++) {
        if(e.currentTarget[i].type === "text") {
            validate('#' + e.currentTarget[i].id);
            users[i] = validate('#' + e.currentTarget[i].id)
        }
        else if(e.currentTarget[i].type === "email") {
            validateEmail(email);
            users[i] = validateEmail(email)
        }
    }

if(users.includes(false)) {
    console.log(' ')
} else {
    console.log('Lyckad inloggning')
    
}
})


