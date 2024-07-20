// 栈 后入先出
const stack = [];

// 入栈
stack.push(0);  // 返回值为新数组的长度
console.log(stack);
stack.push(1);
console.log(stack);

// 出栈
const pop1 = stack.pop();   // 返回值为出栈的元素
console.log(stack,pop1);
const pop2 = stack.pop();
console.log(stack,pop2);