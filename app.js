const h1 = document.querySelector("div.hello:first-child h1")
//class hello를 가진 div내부의 first자식인 h1찾기
//=>HTML element를 자바스크립트로 가져오기

//첫번째 자식 h1의 스타일을 자바스크립트에서 변경하기

function handleTitleClick() {// 클릭이벤트 시 색깔변화  함수
    if (h1.className === "clicked") { //h1의 클래스명이 clicked(빨강)면 비우기=>파란색으로 만들기
        h1.className = "";
    } else {
        h1.className = "clicked";//빨간색이 아니면 빨강으로 바꾸기
    }
}



h1.addEventListener("click", handleTitleClick);

