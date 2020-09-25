const form = document.querySelector('form');
const userName = document.querySelector('.name');
const password = document.querySelector('.password');


//event listener
form.addEventListener('submit', (e)=> {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    //get values from inputs
    const userNameValue = userName.value.trim();
    const passwordValue = password.value.trim();

    if(userNameValue === "") {
        //shower error
        //add error class
        setErrorFor(userName, 'Enter a username')
    } else {
        //add success class
        setSuccessFor(userName);
    }

    if(passwordValue === "") {
        setErrorFor(password, 'Enter a password')
    } else if (!isPassword(passwordValue)){
        setErrorFor(password, "Must be at least 8 characters long and contain 1 letter and 1 number");
    } else {
        setSuccessFor(password);
        swal({
            title: "Login Successful!",
            icon: "success",
          });
    }
}

function setErrorFor(input, message) {
    const formGroup = input.parentElement;
    const small = formGroup.querySelector('small');

    small.innerText = message;

    formGroup.className = 'form-group error';
};

function setSuccessFor(input) {
    const formGroup = input.parentElement;

    formGroup.className = 'form-group success'
};

function isPassword(password) {
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
}
