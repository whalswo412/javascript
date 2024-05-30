// 전역 스코프(전역 변수)
// - 모든 함수에서 접근 가능
var global = 'global';

// 함수 정의
function scope() {
    // 지역 스코프(지역 변수)
    var local = 'local';
    console.log('global:', global); // 전역 변수
    console.log('local:', local);   // 지역 변수
}
// 함수 호출
scope();

// 전역 변수
console.log('함수 바깥에서 접근 가능한 전역변수 global:', global); // 전역 변수

// 또다른 함수
function scope2() {
    console.log('함수 바깥에서 접근 가능', global); // 전역 변수
}