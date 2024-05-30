// 함수 스코프[함수 선언문]
// 함수 스코프란 함수 내에서 선언된 변수는 함수 내에서 접근 가능한 스코프를 말한다.
// 함수 내의 아무리 깊은 블록에서 만들어진 var 변수라 할지라도 함수 내 어디서라도 접근 가능하다.
// 그 이유는 변수의 선언부만 함수 바로 밑으로 끌어올려진다. 이를 호이스팅이라고 한다.
function testFunc(){
    var x;  // 함수 스코프
    var y;  // 함수 스코프
    var z;  // 함수 스코프, z 변수 선언만, undefined로 초기화

    var x = 1;  // 최초로 선언된 x 변수, 함수 내에서 어디에서라도 접근 가능하다.[함수 스코프]
    if(true){
        console.log('1 : ' , x); // 1, if문 블록 밖에서 선언된 x 변수
        var x = 2; // x는 if문 블록 밖에서 선언된 x와 같은 변수
        console.log('2 : ' , x); // 2
        var y = 3; // 
    }
    console.log('3 : ' , x); // 2
    console.log('4 : ' , y); // 3

    // 변수 선언 전에 접근 가능
    console.log('5 : ' , z); // undefined
    var z = 10; // 함수 스코프
    console.log('6 : ' , z); // 10




}
// 함수 호출
testFunc();