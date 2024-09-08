const loginForm=document.querySelector("#login-form")

const loginInput=document.querySelector("#login-form input")
const loginButton=document.querySelector("#login-form button")

function onLoginSubmit(tomato){//로그인 제출시 이벤트 함수
    //form을 submit하면 브라우저는 기본으로 새로고침한다
    tomato.preventDefault()//브라우저 기본 동작을 막는 함수
    console.log(tomato)
}

loginForm.addEventListener("submit",onLoginSubmit)
//form의 submit이벤트를 감지=>입력값 출력함


//submit 이벤트가 발생시 JS는 onLoginSubmit함수를 호출하고 wvent 오브젝트를 argument로 전달
//
