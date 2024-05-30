// 15_array.js

// 빈 배열 생성
const arr = [];

// 배열 요소 추가
arr.push('apple');
arr.push('banana');
arr.push('orange');

// 배열 요소 출력
console.log(arr); // [ 'apple', 'banana', 'orange' ]

// 배열 순회
arr.forEach(function(item, index){
    console.log('index ' + index + ': ' + item);
});

// 배열 순회 - 화살표 함수 + 템플릿 문자열(백틱)
arr.forEach((item, index) => {
    console.log(`index ${index}: ${item}`);
}); // index 0: apple, index 1: banana, index 2: orange






