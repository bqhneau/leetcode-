// 请用 class 封装一个Stack类 包括 push pop peak方法

class Stack {
    constructor(){
        this.stack = []
    }
    push(item){
        this.stack.push(item)
    }
    pop(){
        // 加不加 return 全看 调用该方法时有没有返回值
        return this.stack.pop()   // 不加return 无法获取被移除的元素
    }
    peak(){
        return this.stack[this.stack.length -1]
    }
}

const stack = new Stack();
stack.push(10);  // 将10压入栈中
stack.push(20);  // 将20压入栈中
console.log();

console.log(stack.pop());  // 输出20，并从栈中移除20

console.log(stack.peak());  // 获取栈顶元素
 