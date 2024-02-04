const form = document.getElementById('form');
const fNameInput = document.getElementById('f-name');
const lNameInput = document.getElementById('l-name');
const emailInput = document.getElementById('email');
const phNoInput = document.getElementById('phNo');
const pswrdInput = document.getElementById('pswrd');
const cnfmPswrdInput = document.getElementById('cnfmpswrd');

function validation(password, confirmpswrd) {
    return password === confirmpswrd;
}

form.addEventListener('submit', () => {
    const fName = fNameInput.value;
    const lName = lNameInput.value;
    const email = emailInput.value;
    const phNo = phNoInput.value;
    const paswrd = pswrdInput.value;
    const cnfrmpaswrd = cnfmPswrdInput.value;
    if (!validation(paswrd, cnfrmpaswrd)) {
        
    }
    else {
        fNameInput.value = "";
        lNameInput.value = "";
        emailInput.value = "";
        phNoInput.value = "";
        pswrdInput.value = "";
        cnfmPswrdInput.value = "";
    }
});