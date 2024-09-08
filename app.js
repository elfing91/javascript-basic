const loginForm=document.querySelector("#login-form")

const loginInput=document.querySelector("#login-form input")
const loginButton=document.querySelector("#login-form button")

function onLoginSubmit(){//로그인 제출시 이벤트 함수
   
    const value=loginInput.value;
    console.log(value)
}

loginForm.addEventListener("submit",onLoginSubmit)
//form의 submit이벤트를 감지=>입력값 출력함
