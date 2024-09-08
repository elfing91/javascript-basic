
const loginInput=document.querySelector("#login-form input")
const loginButton=document.querySelector("#login-form button")

function onLoginClick(){//버튼 클릭 이벤트 함수
   
    const value=loginInput.value;

    if(value==""){
        alert("write")
    }else if(value.length>15){/// 글자수가 15이상이면 에러창 출력
        alert("too long")     
    }else{
        console.log(value)
    }
}

loginButton.addEventListener("click",onLoginClick)