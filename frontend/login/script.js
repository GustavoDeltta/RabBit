const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');
var r = document.querySelector(':root')

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
    r.style.setProperty('--angle-background', '270deg');
});
loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
    r.style.setProperty('--angle-background', '90deg');
});