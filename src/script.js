const sub = document.querySelector('sub');
const emailInput = document.getElementById('email');

emailInput.addEventListener('input', checkEmail)

function checkEmail() {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailInput.value.match(emailRegex)) {
        sub.innerText = 'Please enter a valid email address';
    } else {
        sub.innerText = '';
    }
};
