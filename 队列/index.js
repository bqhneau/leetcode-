// 先进先出 
// 从队尾入队 push

let queue = []

// 入队
queue.push(1)
queue.push(2)
console.log(queue);

// 出队
res = queue.shift()  // 删除队头元素 并返回出队的元素
console.log(queue, res);