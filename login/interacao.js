const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.login_button')


const Focus = ({ target }) => {
    const span = target.previousElementSibling;
    span.classList.add('span-active');
}
const saidaFocus = ({ target }) => {
    if (target.value == '') {
        const span = target.previousElementSibling;
        span.classList.remove('span-active')
    }
}
const clickbotao = () => {
    const [username, password] = inputs;

    if (username.value && password.value.length >= 8) {
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', '');
    }
}


function avanco() {
    window.location.href = ("/principal/principal.html")
}


inputs.forEach((input) => input.addEventListener('focus', Focus))
inputs.forEach((input) => input.addEventListener('focusout', saidaFocus))
inputs.forEach((input) => input.addEventListener('input', clickbotao))
