/*
*/

function isValid( string ){
    if(string.length % 2 === 1) return false

    const stack = [];
    for(let i=0;i<string.length;i++){
        const cur = string[i]
        if(cur === '('||cur === '[' || cur === '{'){
            stack.push(cur)
        }else{
            const top = stack[stack.length-1]  // 这里是栈的长度
            // 栈顶元素已经入栈了,此时看当前要入栈的是否匹配，如果匹配，栈顶元素出栈
            if(
                (top === '(' && cur ===')') ||
                (top === '[' && cur ===']') ||
                (top === '{' && cur ==='}')
            ){
                stack.pop();
            }else{
                return false
            }
        }
    }

    return stack.length === 0
}

let string = '{}[]'
console.log(isValid(string));