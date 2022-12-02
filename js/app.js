const form = document.getElementById('form')
const email = document.getElementById('email')

form.addEventListener('submit', e => {
    e.preventDefault();

    emailValidation();
})

const setError = (element, message) => {
    const inputParent = element.parentElement;
    const error = inputParent.querySelector('.error');

    error.innerText = message;
    inputParent.classList.add('error');
}

const setSuccess = element => {
    const inputParent = element.parentElement;
    const error = inputParent.querySelector('.error');

    error.innerText = '';
    inputParent.classList.remove('error');
}

const isValidEmail = email => {
    const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return emailPattern.test(String(email).toLowerCase());
}

const emailValidation = () => {
    const emailValue = email.value.trim();

    if(emailValue === '') {
        setError(email, 'fuck');
    } else if(!isValidEmail(emailValue)) {
        setError(email, 'fuck you')
    } else {
        setSuccess(email)
    }
}