const h1 = document.querySelector("div.hello:first-child h1")
//class hello를 가진 div내부의 first자식인 h1찾기
//=>HTML element를 자바스크립트로 가져오기

//첫번째 자식 h1의 스타일을 자바스크립트에서 변경하기

function handleTitleClick() {// 클릭이벤트 시 색깔변화  함수
   const clickedClass="clicked"//raw value사용시 발생가능한 에러 방지
    h1.classList.toggle(clickedClass) 
    //토글은 h1의 classList에 clicked 클래스가 있는지 확인해 있으면 없애고 없으면 추가
   
}



h1.addEventListener("click", handleTitleClick);

