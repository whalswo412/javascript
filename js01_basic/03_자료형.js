// 문자열에 따옴표 있는 경우
// 문자열에 따옴표가 있는 경우, 다른 종류의 따옴표로 묶어주면 된다.
console.log("Hello, 'World'!");
console.log('Hello, "World"!');

// 문자열 연산
var str = '문자열' + "연산";
console.log(str);   // 문자열연산

// 문자열 + 숫자
var str = '문자열' + 5;
console.log(str);   // 문자열5

// 템플리트 문자열(백틱(`) 사용)
var str = `안녕하세요. "김" 선생님, 저는 오늘 '학교'에 갔습니다.`; // 백틱(`) 사용
console.log(str);   // 안녕하세요. "김" 선생님, 저는 오늘 '학교'에 갔습니다.

var age = 25;
// 1. 템플릿 문자열을 안쓰고 문자열과 변수를 연결하는 방법
console.log('그분의 나이는 ' + age + '세 입니다.');   // 그분의 나이는 25세 입니다.

// 2. 템플릿 문자열에 변수 사용하기
console.log(`그분의 나이는 ${age}세 입니다.`);   // 그분의 나이는 25세 입니다.


// 숫자 자료형
var num = 5; // 정수
var num2 = 10.5;    // 실수 모두 숫자 자료형
console.log(num + num2);    // 15.5

// 논리 자료형
var bool = true;    // 참
var bool2 = false;  // 거짓
var bool3 = 5 > 10; // false

// undefined 자료형
// undefined는 변수를 선언하고 값을 할당하지 않았을 때 자동으로 할당되는 값
// undefined는 자료형이기도 하고 값이기도 하다. 개발자가 직접 할당하지 않는다.
var x; // 변수 선언만, undefined로 초기화
console.log(x); // undefined

// null 자료형
// null은 개발자가 의도적으로 값이 없음을 나타내기 위해서 사용한다.
var nullVar = null; 
console.log(nullVar);   // null

var c = null;
if(true){
    c = 10 + 20;
}
console.log(c); // 30

// 배열 자료형
// 배열은 여러 개의 값을 하나의 변수에 저장하기 위해서 사용한다.
var arr = [1, 2, 3, 4, 5];
console.log(arr);   // [1, 2, 3, 4, 5]
console.log(arr[0]);    // 1

// 빈 배열
var arr2 = [];
console.log(arr2);  // [] empty array

// 배열 반복문
arr.forEach(function(item2, index3){
    console.log(`arr[${index3}] = ${item2}`);
});

// 객체 리터럴
// 객체 리터럴은 중괄호({})를 사용하여 객체를 생성한다.
// 중괄 안에 key: value 형태로 값을 저장한다.
// 객체는 여러 개의 값을 하나의 변수에 저장하기 위해서 사용한다.
var person = 
{
    name: '홍길동',
    age: 25,
    address: '서울',
    job: '학생'
};  
console.log(person);    // {name: "홍길동", age: 25, address: "서울", job: "학생"}
// 객체의 속성에 접근하는 방법
console.log(person.name);   // 홍길동
console.log(person['name']);    // 홍길동
// 객체의 값 변경
person.age = 30;
console.log(person.age); // 30

// 비교 연산자
// === : 값과 자료형이 같은지 비교
// !== : 값과 자료형이 다른지 비교
var bool2 = 5 == '5';  // true
console.log(bool2); // true

bool2 = 5 === '5'; // false
console.log(bool2); // false

// 논리 연산자
// 자바스크립트에서는 ""(빈 문자열), 0, null, undefined, NaN 를 모두 false로 취급한다.
console.log(true && true);   // true
console.log(true || false);  // true
console.log('1 - ', "" && 'cat');   // "", 논리곱에서 결과가 거짓이므로 거짓인 "" 반환
console.log('2 - ', 'dog' && 'lion' && 'cat');   // cat, 논리곱에서 결과가 참이므로 마지막 값인 cat 반환
console.log('3 - ', 'dog' && '' && 'cat');   // "", 논리곱에서 결과가 거짓이므로 거짓인 "" 반환
console.log('4 - ', '' || 'cat');   // cat, 논리합에서 결과가 참이므로 참인 cat 반환
console.log('5 - ', '' || 0);   // 0, 논리합에서 결과가 거짓이므로 거짓인 0 반환    
console.log('6 - ', '' || 'cat' || 0);  // cat, 논리합에서 결과가 참이므로 참인 cat 반환

// not 연산자
console.log('not 연산자 - ', !true); // false

// for in 반복문을 통한 객체의 속성 출력
let obj = {name: '홍길동', age: 25};
for(let key in obj){
    console.log(key, obj[key]);
}   // name 홍길동, age 25












