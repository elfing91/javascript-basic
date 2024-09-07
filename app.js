const title = document.querySelector(".hello:first-child h1")
//class hello를 가진 div내부의 first자식인 h1찾기
//=>HTML element를 자바스크립트로 가져오기

//첫번째 자식 h1의 스타일을 자바스크립트에서 변경하기

function handleTitleClick() {// 클릭이벤트 시 색깔변화  함수
    const currentColor = title.style.color//getter로써, 최근 color값을 복사하는 역할
    let newColor;//setter로써, 변수에 대입된 색상값을 h1.style.color에 최종적으로 할당
    if (currentColor == "blue") {
        newColor = "tomato"
    } else {
        newColor = "blue";
    }
    title.style.color = newColor //현재 바뀐 색을 newColor로 설정

    /*
    1) click event 발생 및 함수 실행
2) currentColor 변수 선언 후 h1.style.color 값 복사 (getter)
3) newColor 변수 선언
4) currentColor 현재 값 확인
5) 조건에 따라 newColor에 "tomato" or "blue" 값 대입
6) 마지막으로 h1.style.color에 newColor값 대입 (setter)
    */
}



title.addEventListener("click", handleTitleClick)
