const form = document.getElementById('form');
const fNameInput = document.getElementById('f-name');
const lNameInput = document.getElementById('l-name');
const emailInput = document.getElementById('email');
const phNoInput = document.getElementById('phNo');
const pswrdInput = document.getElementById('pswrd');
const cnfmPswrdInput = document.getElementById('cnfmpswrd');
const warning = document.querySelector('.warning-div');
const text = document.createElement('p');
let fName;
let lName;
let email;
let phNo;
let paswrd;
let cnfrmpaswrd;
let warning_given = false;

function validation(password, confirmpswrd) {
    return password === confirmpswrd;
}

form.addEventListener('submit', () => {
    fName = fNameInput.value;
    lName = lNameInput.value;
    email = emailInput.value;
    phNo = phNoInput.value;
    paswrd = pswrdInput.value;
    cnfrmpaswrd = cnfmPswrdInput.value;
    if (!validation(paswrd, cnfrmpaswrd)) {
        pswrdInput.style.cssText = "border: 1px solid red;";
        cnfmPswrdInput.style.cssText = "border: 1px solid red;";
        text.textContent = "*Passwords Do Not Match!";
        text.style.cssText = "color: red;";
        warning.appendChild(text);
        warning_given = true;
    }
    else {
        pswrdInput.style.cssText = "border: 1px solid #e6e6e6;";
        cnfmPswrdInput.style.cssText = "border: 1px solid #e6e6e6;";
        if (warning_given) {
            warning.removeChild(text);
            warning_given = false;
        }
        fNameInput.value = "";
        lNameInput.value = "";
        emailInput.value = "";
        phNoInput.value = "";
        pswrdInput.value = "";
        cnfmPswrdInput.value = "";
        alert(`Thank you for submitting the form!\nYour Name: ${fName} ${lName}\nYour Email: ${email}\nYour Phone Number: ${phNo}\nYour Password: ${paswrd}\n`);
    }
});