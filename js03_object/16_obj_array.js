// 16_obj_array.js

// 객체 정의
const p1 = {
    name: '홍길동',
    age: 20,
    address: '서울',
    job: '도적',
    printHello: function(){
        return 'Hello';
    }
};
const p2 = {
    name: '김철수',
    age: 30,
    address: '부산',
    job: '회사원',
    printHello: function(){
        return 'Hello';
    }
};
const p3 = {
    name: '이영희',
    age: 27,
    address: '대구',
    job: '프리랜서',
    printHello: function(){
        return 'Hello';
    }
};

// 객체 저장 배열
const persons = []; // 빈 배열 생성
persons.push(p1);   // 배열 요소 추가
persons.push(p2);
persons.push(p3);

// 배열 요소 출력
console.log('---------------------------------------');
console.log(' 이름    나이    주소    직업     ');
console.log('---------------------------------------');
persons.forEach(function(person){
    console.log(person.name + '    ' + person.age + '    ' + person.address + '    ' + person.job);
    // 템플릿 문자열(백틱) 사용
    console.log(`${person.name}    ${person.age}    ${person.address}    ${person.job}`);//선호하는 방식
}); 

