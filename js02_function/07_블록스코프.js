/*
    [블록스코프]
    - let과 const는 블록 스코프를 가진다.
    - 블록 스코프 : 변수를 선언한 블록 내에서만 유효하다.
    - 현재 자바스크립트 개발에서는 let과 const를 사용하는 것을 권장한다.
      이는 코드의 예측 가능성을 높이고 의도지 않는 변수값의 변경을 방지하기 위해서다.
    - var는 함수 스코프를 가지기 때문에 블록 스코프를 무시한다.
    - let과 const는 선언전에 사용할 수 없다.  
*/

// let과 const의 블록 스코프
function testLetConst(){
    let a = 1;  // a는 선언된 레벨에서 접근 가능함.
    const b = 2;
    let c = 3;
    if(true){        
        console.log('c : ', c); // 3
        console.log('33 : ', a); //
        // 블록 스코프, if블락 안에서 만들어진 a는 '일시적 사각지대(Temporal Dead Zone)'에 빠진다. 
        // 그래서 선언전 사용시 에러가 발생한다.
        let a = 3;  // 선언과 동시에 초기화를 하게 되면 일시적 사각지대에 빠지지 않는다.
        console.log('11 : ', a); // 1
        const b = 4;// 블록 스코프
        console.log('1 : ', a); // 3
        console.log('2 : ', b); // 4
    }
    console.log('3 : ', a); // 1
    console.log('4 : ', b); // 2

}

// 함수 호출
testLetConst();