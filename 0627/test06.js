// var과 let의 차이
// let은 범위와 중복불허
if(true){
    var functionScopeValue = 'global';
    let blockScopeValue = 'local';
}
console.log(functionScopeValue);
// console.log(blockScopeValue); // 오류 발생