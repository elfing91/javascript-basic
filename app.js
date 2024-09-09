const loginForm = document.querySelector("#login-form")

const loginInput = document.querySelector("#login-form input")
const loginButton = document.querySelector("#login-form button")
const greeting=document.getElementById("greeting")

function onLoginSubmit(tomato) {//로그인 제출시 이벤트 함수
    const value = loginInput.value;
    tomato.preventDefault()//브라우저 기본 동작을 막음
    loginForm.classList.add("hidden")//hidden이라는 클래스명 더해 form을 숨김
    greeting.innerText="hello,"+value //h1안에 greeting에 있는 텍스트 추가
}

loginForm.addEventListener("submit", onLoginSubmit)
//form의 submit이벤트를 감지=>입력값 출력함


//submit 이벤트가 발생시 JS는 onLoginSubmit함수를 호출하고 wvent 오브젝트를 argument로 전달
//
