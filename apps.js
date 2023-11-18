const userContainer = document.querySelector(".user-container");
const regiBtn = document.querySelector(".registration-btn");
const loginBtn = document.querySelector(".login-btn");

regiBtn.addEventListener('click', ()=>{
    userContainer.classList.add('loging-section-display')
});
loginBtn.addEventListener('click', ()=>{
    userContainer.classList.remove('loging-section-display')
});



// Animation program======================

