//함수에 전달된 인자의 default 값을 지정할수 있다.
function showInfo(num=0, name="이름", addr="주소"){
    console.log(num+"|"+name+"|"+addr);
}

showInfo();
showInfo(1);
showInfo(1, "김구라");
showInfo(1, "김구라", "노량진");
showInfo(null, null, null);
showInfo(undefined, undefined, undefined);

//showInfo(name="원숭이", num=2, addr="상도동");//순서대로 들어간다.

// 편한 파라미터 (Rest Parameter)
function test(...args){
    //args 는 배열이다. 
    console.log(args);
}

test();
test(10);
test(10,20);

//Lambda 함수 (한줄짜리 함수)
let sum=(a,b)=>a+b;
console.log("10+20="+sum(10, 20));

//arrow 함수 (화살표 모양으로 만든 함수, Lambda 함수 포함)

let getArea=function(width, height){
    let result=width*height;
    return result;
};

let getArea2=(width, height)=>{
    let result=width*height;
    return result;
};
// {} 를 생략하면 return 예약어를 생략할수 있다.
let getArea3=(width, height)=>width*height;

console.log(getArea(10, 20));
console.log(getArea2(10, 20));
console.log(getArea3(10, 20));

let names=["김구라", "해골", "원숭이"];
//배열의 map() 함수를 호출하면서 arrow 함수 전달하기 
names.map((item, index)=>{
    console.log(item+"|"+index);
});