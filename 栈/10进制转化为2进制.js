// 请用栈 将 100 转化为 二进制数

function toTwo (num) {
    const stack = [];
    let res = '';
    
    while(num >= 1){
        stack.push(num % 2)
        num = Math.floor( num / 2 )
    }
    while(stack.length>0){
        res += stack.pop()
    }

    return res
}

console.log(toTwo(100));