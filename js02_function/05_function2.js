//1. 함수 선언문 - 덧셈 함수
function add(x, y) {
    return x + y;
}
// 함수 호출
console.log(add(2, 3)); // 5

//2. 함수 표현식 - 뺄셈 함수
const sub = function sub(x, y) {
    return x - y;
};
// 함수 호출
console.log(sub(5, 3)); // 2

//3. 화살표 함수 - 곱셈 함수
const mul = (x, y) => {
    return x * y;
};
// 함수 호출
console.log(mul(2, 3)); // 6

// 일급객체 함수를 매개변수로 전달
function calculate(func, x, y) {    // 함수선언문
    return func(x, y);
}

// 함수 호출
let result = calculate(sub, 3, 2); // 5, add 함수 호출
console.log('calculate : ', result);

result = calculate(mul, 3, 2); // 6, mul 함수 호출
console.log('calculate : ', result);

result = calculate(add, 3, 2); // 5, add 함수 호출[함수 선언문]
console.log('calculate2 : ', result);