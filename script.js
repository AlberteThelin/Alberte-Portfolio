const burger = document.getElementById('burger');
const navUL = document.getElementById('navi-ul');

burger.addEventListener('click', () => {
    navUL.classList.toggle('show');
});

/* Javascriptet til navigationsbaren har jeg fået fra Emil S. Nielsen*/