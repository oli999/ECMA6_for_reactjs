/*
    java 처럼 class 를 정의 할수 있다.
*/

class Car{
    //생성자
    constructor(name){
        //생성자의 인자로 전달된 내용을 _name 이라는 필드에 저장
        this._name=name;
        console.log("생성자 호출됨");
    }

    //static 메소드
    static showInfo(){
        console.log("Car 클래스의 static 메소드 입니다.");
    }
    //class 메소드
    drive(){
        console.log(this._name+" 이 달려요");
    }
}

let c1=new Car("소나타");
//일반(class) 메소드 호출
c1.drive();
//static 메소드 호출
Car.showInfo();
console.log("c1._name : "+c1._name);
