function sayHello(name, age){//이름/나이출력함수
    console.log("h1, "+name+" and my age is "+age)
}
sayHello("nico",10)

function plus(a,b){// 더하기 함수
    let result=a+b
    console.log(a+"+"+b+"="+result)
}

plus(3,6)
plus(-2,0)

const player={ //이름,나이출력 함수를 포함한 오브젝트 선언
    sayHello: function(name, age){
        console.log("h1, "+name+" and my age is "+age)
    }
}

player.sayHello("nico",10)
