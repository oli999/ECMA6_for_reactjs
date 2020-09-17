/*
    React 를 위한 ECMA6 전체 정리
*/

//1. let 정의된 블럭{} 안에서만 사용할수 있게 할때  
let myName="김구라";

//2. const 값이 할당되면 재 할당이 불가한 상수를 정의할때
const pi=3.14159;

//3. Template Literal (back tick 을 이용한)
function getGreet(){
    return "좋은 아침~";
}
let result=`Hello ${myName} ! ${getGreet()}`;
console.log(result);

//4. Default Parameter
function printInfo(num=0, name="이름"){
    console.log(`번호:${num} 이름:${name}`);
}

//5. Arrow Function
function sum(num1, num2){
    return num1+num2;
}
const sum2=(num1, num2)=>{return num1+num2;}
const sum3=(num1, num2)=>num1+num2;

//6. Destructuring 구조분해 / Destructuring Assignment 구조화 할당
const nums=[10, 20, 30];
const [x, y, z]=nums;
const [,,last]=nums; //앞에 두개의 값은 무시하기

const mem={num:1, name:"김구라", isMan:true};
// const num=mem.num;
// const name=mem.name;
// const addr=mem.isMan;

//위의 3줄을 대체하는 표현식 (객체 구조 분해)
const {num, name, addr}=mem;

//7. 개선된 객체 리터럴
const brand="Hyundai";
const color="silver";
const drive=function(){
    console.log("달려요!");
};
const myCar={brand, color, drive};

const myCar2={
    brand,
    color,
    drive(){
        console.log("달려요");
    }
};

//8. Spread Operator

const names=["김구라", "해골", "원숭이"];
const msgs=["안녕","나야나","어쩌구"];

const result2=[...names, ...msgs];

function print(...args){
    //args 는 배열이다.
    console.log(args);
}
//함수를 호출하면서 인자의 갯수를 동적으로 전달 할수 있다.
print("하나","두울","세엣");

//9. class
class Car{
    //생성자
    constructor(name){
        this._name=name;
    }
    //class 메소드 
    drive(){
        console.log(this._name+" 이 달려요");
    }
}
//클래스 상속
class SuperCar extends Car{
    driveFast(){
        console.log("빨리 달려요");
    }
}

//클래스를 이용한 객체 생성
const car1=new Car();
const car2=new SuperCar();
car1.drive();
car2.drive();
car2.driveFast();

//static(정적) 메소드, 필드
class MyUtil{
    static version="1.0";
    static write(){
        console.log("필기를 해요");
    }
}
console.log(MyUtil.version); //static 필드 참조
MyUtil.write(); //static 메소드 호출ㄴ

console.log("End!");


