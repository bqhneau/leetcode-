
var RecentCounter = function() {
    // 在构造函数上挂载共用属性 队列
    this.queue = []
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    // 让时间 t 依次入队
    this.queue.push(t);
    // 如果 队头元素 不满足要求 则出队
    while(this.queue[0] < t-3000){
        this.queue.shift();
    }
    // 返回队列的长度 即最近的请求数
    return this.queue.length
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */