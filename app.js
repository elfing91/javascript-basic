
const loginInput=document.querySelector("#login-form input")
const loginButton=document.querySelector("#login-form button")

function onLoginClick(){
    console.log("click");
}

loginButton.addEventListener("click",onLoginClick)