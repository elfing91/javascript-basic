const loginForm = document.querySelector("#login-form")

const loginInput = document.querySelector("#login-form input")
const loginButton = document.querySelector("#login-form button")
const greeting = document.getElementById("greeting")

//여러개의 string이 사용되므로 이를 저장하기 위한 변수 선언->대문자로 표기
const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "value"
function onLoginSubmit(tomato) {//로그인 제출시 이벤트 함수
    //오타를 방지한 const상수 생성
    const value = loginInput.value;


    tomato.preventDefault()//브라우저 기본 동작을 막음
    loginForm.classList.add(HIDDEN_CLASSNAME)//loginForm엘리먼트에 hidden이라는 클래스명 더해 form을 숨김

    greeting.classList.remove(HIDDEN_CLASSNAME)//h1은 hidden을 해제해 숨겨지지 않도록 함
    //id가 greeting인 h1엘리먼트를 불러와 클래스리스트 중 hidden이 있으면 제거함

    localStorage.setItem(USERNAME_KEY, value)//

}

function paintGreetings(value) {
    greeting.innerText = "hello," + value //h1안에 greeting에 있는 텍스트 추가
    greeting.classList.remove(HIDDEN_CLASSNAME)
    //greeting안에 텍스트 추가하고 (HIDDEN_CLASSNAME)제거
}


//form의 submit이벤트를 감지=>입력값 출력함

const savedUsername = localStorage.getItem(USERNAME_KEY)
//유저정보가 lo cal storage에 없다면 nnull값 반환
if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginSubmit)
    //savedUsername이 null이면 form의 hidden클래스명을 지움
} else {
    paintGreetings(savedUsername)//함수화

}