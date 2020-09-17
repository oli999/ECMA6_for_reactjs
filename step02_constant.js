/* const 예약어를 이용해서 상수 만들기 (값이 할당되면 변경 불가)*/
let pi=3.14;
const PI=3.14;

pi=3.14159;
console.log('pi:'+pi);

//PI=3.14159; //값 변경 불가 
console.log('PI:'+PI);

//배열에 데이터를 추가, 삭제 하는것은 nums 자체를 수정하는것이 아니다.
const nums=[10, 20, 30, 40, 50];

//데이터 추가 
nums.push(60);
//데이터 삭제 
nums.splice(0, 1);

console.log(nums);

//object 에 저장된 내용 수정가능 
const mem={num:1, name:"김구라"};

mem.num=2;
mem.name="이정호";

console.log(mem);


