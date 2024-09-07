const title = document.querySelector(".hello:first-child h1")
//class hello를 가진 div내부의 first자식인 h1찾기
//=>HTML element를 자바스크립트로 가져오기

//첫번째 자식 h1의 스타일을 자바스크립트에서 변경하기

function handleTitleClick() {// 클릭이벤트 시 색깔변화  함수
    if (title.style.color == "black") {
        title.style.color = "blue"
    } else {
        title.style.color = "black";
    }
}

function handleMouseEnter() { //title메 마우스 올릴 때 이벤트 함수
    title.innerText = "mouse is here"
}
function handleMouseLeave() {//title에 마우스 뗄때 이벤트 함수
    title.innerText = "mouse is not here"
}

function handleWindowResize(){//윈도우의 사이즈변경 이벤트시 함수-배경색 변경
    document.body.style.backgroundColor="tomato"
}

function handleWindowCopy(){//문자 복사 이벤트 시 함수--알림창 출력
    alert("copied!")
}

title.onclick=handleTitleClick //아래와 같은 기능 수행
//title.addEventListener("click", handleTitleClick)
title.addEventListener("mouseenter", handleMouseEnter)
title.addEventListener("mouseleave", handleMouseLeave)


window.addEventListener("resize",handleWindowResize)
window.addEventListener("copy",handleWindowCopy)
