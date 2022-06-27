// 호이스팅(끌어 올리기) - 함수를 선언하기 전에 호출이 가능
// 일반적으로는 함수를 선언 후 호출하지만 호출 후 선언이 가능함
hello();

function hello(){
    console.log('안녕하세요');
}

// hello2(); // 아래와 같은 경우 호출은 반드시 함수 아래에서 해야함.
let hello2 = function(){
    console.log('안녕하세요');
}
hello2();