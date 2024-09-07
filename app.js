const title=document.querySelector(".hello:first-child h1")
//class hello를 가진 div내부의 first자식인 h1찾기
//=>HTML element를 자바스크립트로 가져오기

//첫번째 자식 h1의 스타일을 자바스크립트에서 변경하기

function handleTitleClick(){
    title.style.color = "blue";}

title.addEventListener("click", handleTitleClick)
//title에 eventListener추가+ function을 두번쨰 인수(argument)에 전달

//자바스크립트에 function을 전달해 유저가 title을 클릭하면 자바스크립트가 나 대신 실행버튼을 누르게 함