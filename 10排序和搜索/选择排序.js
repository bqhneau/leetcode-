// 思路分析 [貌似有冒泡正好相反]

// 第一轮找到最小值 放到第一位
// 第二轮找到最小值 放到第二位
// 执行 n-1 轮

// 时间复杂度：O(n^2)
// 空间复杂度：

Array.prototype.selectionSort = function () {
    for (i = 0; i < this.length; i++) {
        let indexMin = i;
        for (j = i; j < this.length; j++) {
            // 1、找到本轮最小的那个
            if (this[j] < this[indexMin]) {
                indexMin = j
            }
        }
        // 2、交换
        if(indexMin !== i) [this[i], this[indexMin]] = [this[indexMin], this[i]]
    }

    return this
}


const arr = [2, 5, 4, 1, 3];
console.log(arr.selectionSort());