var nameSignUp = document.querySelector(".nameSignUp")
var emailSignUp = document.querySelector(".emailSignUp")
var passSignUp = document.querySelector(".passSignUp")
var emailexist = document.querySelector(".emailexist")

var users ;
if(localStorage.getItem("users") != null) {
    users = JSON.parse(localStorage.getItem("users"));
}else{
    users = []
}

var btnSign = document.querySelector(".btnSign")

if(btnSign != null) {
    btnSign.addEventListener("click", function(){
        validation()
        console.log(users);
    })
}

//redex
function validName(){
    var regexName = /^[a-zA-Z ]{3,}$/;
    return regexName.test(nameSignUp.value)
}


function validEmail(){
    var regexEmail = /^[a-zA-Z]{3,}([0-9]{1,})?\@(gmail|yahoo|icloud)\.com$/;
    return regexEmail.test(emailSignUp.value)
}


function validPassword(){
    var regexPassword = /^[a-zA-z\d?(!@#$%^&*)?]{8,}$/;
    return regexPassword.test(passSignUp.value)
}

function emailExist(){
    for (var i = 0 ; i < users.length ; i++){
            if(users[i].email.toLowerCase() == emailSignUp.value.toLowerCase()){
                return true;
            }
        }
}

//checked
function validation(){
    if(validName() == false){
        emailexist.classList.add("text-danger");
        emailexist.innerHTML = "Site name must contain at least 3 characters Site"
    }else if(validEmail() == false){
        emailexist.classList.add("text-danger");
        emailexist.innerHTML = "Email is not valid"
    }else if(emailExist() == true){
        emailexist.classList.add("text-danger");
        emailexist.innerHTML = "Email already exists"
    }else if(validPassword() == false){
        emailexist.classList.add("text-danger");
        emailexist.innerHTML = "password must be at least 8 characters or numbers"
    }else{
        var user = {
            name: nameSignUp.value,
            email: emailSignUp.value,
            pass: passSignUp.value
        }
        users.push(user);
        emailexist.classList.remove("text-danger" );
        emailexist.classList.add( "text-success");
        emailexist.innerHTML = "Success"
        localStorage.setItem("users" , JSON.stringify(users))
        clearAll()
    }
}

//clear

function clearAll(){
    nameSignUp.value = ""
    emailSignUp.value = ""
    passSignUp.value =""
}


//login
var  userIndex;

var emailLogin = document.querySelector(".emailLogin")
var passLogin = document.querySelector(".passLogin")
var incorrect = document.querySelector(".incorrect")
var btnLogin = document.querySelector(".btnLogin")

if(btnLogin != null){
    btnLogin.addEventListener("click" , function(){
        login()
        loginValidation()
    })
}



function loginValidation(){
    if (emailLogin.value == "" && passLogin.value == ""){
        incorrect.classList.add("text-danger")
        incorrect.innerHTML = "All inputs is required"
    }
}

function login() {
    for (var i = 0; i < users.length ; i++) {
        if(emailLogin.value.toLowerCase() == users[i].email.toLowerCase() && passLogin.value ==  users[i].pass){
            location.href = "home.html"
            localStorage.setItem("username" , users[i].name)
            incorrect.classList.remove("text-danger")
            incorrect.innerHTML = ""
        }else{
            incorrect.classList.add("text-danger")
            incorrect.innerHTML = "incorrect email or password"
        }
    }
    if(localStorage.getItem("users") == null){
        incorrect.classList.add("text-danger")
        incorrect.innerHTML = "incorrect email or password"
    }
}



//logout
var logout = document.querySelector(".logout")

if(logout != null){
    logout.addEventListener("click", function(){
        location.href = "index.html"
    })
    var username = localStorage.getItem("username")
    var userName = document.querySelector(".userName")
    userName.innerHTML = `Welcome ` + username
}