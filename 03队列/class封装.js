class Queue {
    constructor(){
        this.queue = []
    }
    // 入队
    push(item){
        this.queue.push(item)
    }
    // 出队
    shift(){
        return this.queue.shift()
    }
    // 获取队头
    top(){
        return this.queue[0]
    }
}

let queue = new Queue

queue.push(1)
queue.push(2)
queue.push(3)
console.log(queue);

let item = queue.shift()
console.log(queue,item);

let top = queue.top()
console.log(top);
