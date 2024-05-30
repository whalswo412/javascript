// [함수 호이스팅]

// 1. 함수 선언문의 호이스팅
// 1.1. 함수 호출
printHello(); // Hello2

// 1.2. 함수 선언문 - 함수 전체 통째로 끌어올려진다.(호이스팅)
function printHello(){
    console.log('Hello2');
}

// 2. 함수 표현식의 호이스팅
// 2.1. 함수 표현식 - 변수 선언 부분만 호이스팅된다.
// 그래서 함수 선언 전에 사용하면 안된다.
const printHello3 = function printHello3(){
    console.log('Hello3');
}
// 2.2. 함수 호출
printHello3(); // Hello3