// console : window 가 제공하는 객체, log() : console 객체가 제공하는 메서드
// 1. 원래 코드
console.log(x); 
var x = 15;

// 2. 자바스크립트 엔진이 해석한 코드
var x; // x 변수 선언만, x 변수는 undefined로 초기화[호이스팅]
console.log(x); // undefined 출력 
x = 15; // 초기화
console.log(x); // 15 출력

// 3. 결과 : 호이스팅(Hoisting)이 발생하여 undefined 출력
// var x = 15; 라고 했을 때 변수 선언부인 var x; 가 호이스팅 되어 
// 자바스크립트 스코프(영역) 맨위로 올려져서 undefined로 초기화 되어 출력된다.

// var 키워드로 변수 중복 선언[폐단]
var x = 10; // 변수 선언
var x = 20; // 변수 중복 선언
console.log('x : ', x); // 20, 같은 스코프 내에서 중복 선언이 가능하다. 즉, 변수 공유가 가능하다.

// let 키워드로 변수 중복 선언 불가
let y = 10; // 변수 선언
//let y = 20; // 변수 중복 선언[에러]
y = 20; // 변수 재할당

// const 키워드로 변수 중복 선언 불가
// 함수, 객체 정의할 때 주로 const를 사용한다.
const z = 10; // 변수 선언
//const z = 20; // 변수 중복 선언[에러]
z = 20; // 변수 재할당[에러]
console.log('z : ', z); // 10
