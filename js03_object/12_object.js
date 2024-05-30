// [객체 리터럴]
// - 중괄호 {}를 사용하여 객체를 생성하는 방법.
const person = {    
    name: '홍길동',
    age: 25,
    address: '서울',
    job: '학생',
    printHello: function(){
        return 'Hello';   
    }
};
// 객체의 속성에 접근하는 방법
console.log(person);    // {name: "홍길동", age: 25, address: "서울", job: "학생"}
console.log(person["name"]); // 홍길동
console.log(person.name); // 홍길동
console.log(person.age); // 25
console.log(person.printHello()); // Hello, 메소드호출  

// 속성 변경
person.age = 30;    // 25 -> 30세
console.log(person.age); // 30

console.log('=====================================');

// 빈 객체 생성
const emptyObj = {};
emptyObj.name = '홍길동';
emptyObj.age = 27;
emptyObj.address = '서울';
console.log(emptyObj);  // {name: "홍길동", age: 27, address: "서울"}

// 객체 속성 제거
delete emptyObj.address;    // address 속성 제거
console.log(emptyObj);  // {name: "홍길동", age: 27}

console.log('=====================================');
emptyObj.address ={   // 객체 안에 객체 생성
    city: '서울',
    dong: '강남구',
    detail: '역삼동'
};
console.log(emptyObj);  // {name: "홍길동", age: 27, address: {city: "서울", dong: "강남구", detail: "역삼동"}}