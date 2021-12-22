const form = document.getElementById('form')
const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const eMail = document.getElementById('Email')
const userName = Math.random()*1000
console.log(userName)

form.addEventListener('submit',(e) => {
    e.preventDefault();
    checkinputs();
})

function checkinputs() {
    const firstNameValue = firstName.value()
    const lastNameValue = lastName.value()
    const emailVallue = eMail.value()
    

    if(firstNameValue === '') {
        setErrorFor(userName,'Användarnamnet kan inte vara tomt')
    } else {
        setSuccessFor(userName);
    }
}
function setErrorFor (input,message) {
    const formControl = input.parentElemnt;
    const small = formControl.querySelector('small')
    small.innerText = message;

    formControl.className = 'form-control error'
}