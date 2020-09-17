//변수를 선언하는 방법1 (함수 scope)
var myName="김구라";

//변수를 선언하는 방법2 ( {} brace scope )
let yourName="원숭이";

if(true){
    var num1=10;
    let num2=20;
}

console.log(num1);
//console.log(num2); // 참조 불가

function test(){
    var num3=30;
}

//console.log(num3); //참조 불가 

for(var i=0; i<5; i++){
    console.log(i);
}

console.log(i);

for(let j=0; j<5; j++){
    console.log(j);
}

//console.log(j); // 참조 불가




