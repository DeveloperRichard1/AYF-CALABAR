const form = document.querySelector('body > div.container.mt-5 > form');
const emailPattern =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const namePattern = /^[a-zA-Z\s\.]*$/;
const numberPattern =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
const feedOne = document.querySelector('.one');
const feedTwo = document.querySelector('.two');
const feedThree = document.querySelector('.three');



form.addEventListener('submit', (e) => {
    e.preventDefault();
    /*validating the fullname
    const fullName = form.fullName.value.trim();


    if (namePattern.test(fullName)) {
        feedOne.textContent = "";
    } else {
        feedOne.textContent = "Oboy avoid putting numbers or special characters";
    } */

});



//live feedback for fullname
form.fullName.addEventListener('keyup', (e) => {
    if (namePattern.test(e.target.value)) {
        form.fullName.setAttribute('class', 'success form-control');
    } else {
        form.fullName.setAttribute('class', 'error form-control');
    }
});

//live feedback for phoneNumber
form.number.addEventListener('keyup', (e) => {
    if (numberPattern.test(e.target.value)) {
        form.number.setAttribute('class', 'success form-control');
    } else {
        form.number.setAttribute('class', 'error form-control');
    }
});

//live feedback for email
form.email.addEventListener('keyup', (e) => {
    if (emailPattern.test(e.target.value)) {
        form.email.setAttribute('class', 'success form-control');
    } else {
        form.email.setAttribute('class', 'error form-control');
    }
});