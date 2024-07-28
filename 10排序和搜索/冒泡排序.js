// 思路分析 
// 遍历所有 比较两个相邻元素 大就交换
// 两层 for循环 【外层】决定整个排序过程需要多少轮比较 【内层】负责每一轮的交换

// 时间复杂度：O(n^2)
// 空间复杂度：


Array.prototype.bubbleSort = function () {
    for(i = 0; i < this.length; i++){
        for (let j = 0; j < this.length - i; j++) {
            if (this[j] > this[j + 1]) {
                // const temp = this[j];
                // this[j] = this[j + 1];
                // this[j + 1] = temp
                [this[j],this[j+1]] = [this[j+1], this[j]]  // 用解构赋值交换
            }
        }
    }
    return this
}

const arr = [2,5,4,1,3];
console.log(arr.bubbleSort());