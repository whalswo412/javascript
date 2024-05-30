// 14_string.js

// 문자열 길이
const pwd = '123';
console.log(pwd.length); // 3
if(pwd.length < 4){
    console.log('비밀번호는 4자 이상이어야 합니다.');
}

// 문자열 포함 여부 includes()
const email = 'test!naver.com';
if(email.includes('@') === false){
    console.log('올바른 이메일 형식입니다.');
}

// 문자열 찾기 indexOf() - 인덱스는 0부터 시작
const str = 'Hello World!';
console.log(str.indexOf('World')); // 6, World의 첫글자 W의 인덱스
console.log(str.indexOf('world')); // -1, 찾는 문자열이 없으면 -1 반환

// 문자열 자르기 slice() - 인덱스는 0부터 시작
const fileName = 'index.html';
console.log(fileName.slice(0, 5)); // index, 0번째부터 5번째 앞까지
console.log(fileName.slice(5)); // .html, 5번째부터 끝까지

// 문자열 split() - 문자열을 구분자로 나누어 배열로 반환
const fruits = 'apple, banana, orange';
const fruitArr = fruits.split(', '); // 구분자로 , 사용
console.log(fruitArr); // [ 'apple', 'banana', 'orange' ]

// 문자열 substring() - 시작 인덱스부터 끝 인덱스 전까지 문자열 반환
const str2 = 'Hello World!';
console.log(str2.substring(0, 5)); // Hello, 0번째부터 5번째 앞까지
console.log(str2.substring(6)); // World!, 6번째부터 끝까지

