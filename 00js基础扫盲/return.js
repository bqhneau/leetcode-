// 遇到 return 就会结束当前语句 
// return 会退出当前函数的执行，并不是阻断后面的执行

for(let i = 0; i<10; i++){
    if(i>5){
        return;
    }
    console.log('for内',i);
}
console.log('外面',i);  // 不会执行





// 在递归函数中
// 在当前函数的上下文中，return 之后的代码不会被执行。但是，这并不影响调用该函数的代码继续执行。
// 即 value 为true时 111不会打印； 但是 caller中会继续执行
function callee() {
    if(value){
        return true;
    }
    console.log(111);
}

function caller() {
    callee();  // 这里忽略了 callee 的返回值
    return false;  // 默认返回 false
}
res = caller()
console.log('递归',res);  // false