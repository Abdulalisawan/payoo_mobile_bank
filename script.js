const phonenumber= document.querySelector(`#phonenumber`);
const password = document.querySelector(`#password`);
const submit = document.querySelector(`#button`);
const phoneregex = /^(?:\+8801|01)[3-9]\d{8}$/;
const passregex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/;

function validate(input,regexvalue,errormessge){
    let validinput=regexvalue.test(input.value);
    if(!validinput){
        input.value=``;
        
        input.placeholder=`${errormessge}`;
        input.classList.add(`colorinput`);
        return false;
        
        
    }
    else{
        input.classList.remove(`colorinput`);
        return true;

    }
}

const messege={
    phone:`Enter a valid  number`,
    pass:`Enter valid password`
}

submit.addEventListener(`click`, function(e){
    e.preventDefault();
    let isvalidphone= validate( phonenumber,phoneregex,messege.phone);
    let isvalidpass= validate(password, passregex, messege.pass);
    if(isvalidphone && isvalidpass){
        window.location.href=`./home.html`
    }

})