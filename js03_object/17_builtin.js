// 17_builtin.js

// 날짜(Date) 객체
const now = new Date();
console.log(now); // 2024-05-30T01:46:15.064Z, T-구분자, Z-UTC시간
console.log(now.getFullYear()); // 2024, 연도
console.log(now.getMonth()); // 4, 월(0부터 시작)
console.log(now.getDate()); // 30, 일

console.log('요일 ', now.getDay()); // 4, 요일(0:일요일, 1:월요일, ... 6:토요일)

console.log(now.getHours()); // 10, 시
console.log(now.getMinutes()); // 46, 분
console.log(now.getSeconds()); // 15, 초

// 날짜 조작
const date2 = new Date();
date2.setFullYear(2023); // 해당 날짜로 변경
date2.setMonth(11); // 12월, 0부터 시작
date2.setDate(25); // 25일
date2.setHours(12); // 12시
console.log(date2); // 2023-12-25T03:47:15.064Z

// 수학(Math) 객체
const floatNum = 10.56;
console.log(Math.ceil(floatNum)); // 11, 올림, 숫자보다 큰 정수 중 가장 작은 정수
console.log(Math.floor(floatNum)); // 10, 내림, 숫자보다 작은 정수 중 가장 큰 정수
console.log(Math.round(floatNum)); // 11, 반올림



