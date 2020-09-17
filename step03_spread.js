/*
    ... spread 연산자
*/

function test(a, b, c){
    console.log(a+"|"+b+"|"+c);
}

const nums=[10, 20, 30];

// nums 배열을 펼쳐서 함수 호출하면서 값 전달하기 
test(...nums);

const names=["김구라","해골","원숭이"];
const names2=[...names];
const names3=[...names, "주뎅이", "덩어리"];

console.log(names2);
console.log(names3);

const mem={num:1, name:"김구라"};
//배열 뿐만 아니라 object 도 spread 연산자를 사용할수 있다. 
const mem2={...mem};
const mem3={...mem, addr:"노량진"};

console.log(mem2);
console.log(mem3);

function printInfo(addr, num, name){
    console.log(num+"|"+name+"|"+addr);
}

printInfo("상도동", 2, "원숭이");
//printInfo(...mem3); //에러 발생
