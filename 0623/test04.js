let x=5; // 숫자형
let y = 'five'; // 문자형
let isTrue = true; // boolean
let empty = null; // null
let nothing; // undefined
let sym = Symbol('me'); // Symbol
let item = {
    price : 5000,
    count : 10
}; // 객체(object)
//----- 데이터의 종류

let fruits = ['apple','orange','kiwi']; // 배열 선언

let addFruit = function(fruit){
    fruits.push(fruit);
} // 함수

addFruit('watermelon'); // 함수 실행
console.log(fruits); // 콘솔 출력