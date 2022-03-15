const signupbutton = document.querySelector('#signup');
const loginbutton = document.querySelector('#login');
const card = document.querySelector('.card');
const errorfloat = document.querySelector('.errors');
let errorFloatTimeout;

signupbutton.addEventListener('click', function(e) {
    if ( !card.classList.contains('card--signup') ) {
        document.querySelector('.card').classList.toggle('card--signup');   
    }
    else {
        let email = document.forms[0].signupemail.value;
        let first = document.forms[0].signupfirst.value;
        let last = document.forms[0].signuplast.value;
        let pass = document.forms[0].signuppass.value;
        if ( email === '' || first === '' || last === '' || pass === '' ) {
            showErrorFloat('if');
            return;
        } else if ( email !== '' && first !== '' && last !== '' && pass !== '' ) {
            showErrorFloat('et');
        }
    }
});

loginbutton.addEventListener('click', function(e) {
    if ( card.classList.contains('card--signup') ) {
        document.querySelector('.card').classList.toggle('card--signup');
    }
    else {
        let username = document.forms[0].username.value;
        let pass = document.forms[0].loginpass.value;
        if ( username === '' || pass === '' ) {
            showErrorFloat('if');
            return;
        } else if ( username !== '' && pass !== '' ) {
            showErrorFloat('ue');
        }
    }
});

// Show error
function showErrorFloat(...errorClass) {
    if ( errorfloat.classList.contains('active') ) {
        Array.from(errorfloat.querySelectorAll('.error')).forEach( error => {
            error.classList.remove('active');
        } );
    }
    errorClass.forEach( errorc => {
        errorfloat.querySelector('.error--' + errorc).classList.add('active');
    } );
    errorfloat.classList.add('active');
    window.clearTimeout(errorFloatTimeout);
    errorFloatTimeout = setTimeout(() => {
        Array.from(errorfloat.querySelectorAll('.error')).forEach( error => {
            error.classList.remove('active');
        } );
        errorfloat.classList.remove('active');
    }, 5000);
}


// Show Hide password
const shbuttons = Array.from(document.querySelectorAll('.sh'));

shbuttons.forEach(sh => {
    if (sh === shbuttons[0]) {
        sh.addEventListener('click', function(){
            sh.classList.toggle('s');
            let type = sh.classList.contains('s') ? 'text' : 'password';
            document.querySelector('.inputscategory--login .inputwrapper--password .textinputs').setAttribute('type', type );
        })
    } else {
        sh.addEventListener('click', function(){
            sh.classList.toggle('s');
            let type = sh.classList.contains('s') ? 'text' : 'password';
            document.querySelector('.inputscategory--signup .inputwrapper--password .textinputs').setAttribute('type', type );
        })
    }
});