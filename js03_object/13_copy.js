// [깊은복사/얕은복사]

// 깊은 복사(deep copy)
let num = 20;
let copyNum = num;  // copyNum=20
num = 30;
console.log(num);   // 30
console.log(copyNum);   // 20

console.log('=====================================');

//얕은복사 shallow copy
const person = {    // 객체 리터럴 방식으로 객체 생성
    name: '홍길동'
};

const copyPerson = person;  // copyPerson = person
person.name = '이몽룡';
console.log(person);    
console.log(copyPerson);    