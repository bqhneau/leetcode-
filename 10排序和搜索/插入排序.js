// 思路分析

// 从第二个数开始往前比 如果大就往后排
// 以此类推执行 n-1 轮

// 时间复杂度：O(n^2)

Array.prototype.insertionSort = function () {
    for (let i = 1; i < this.length; i += 1) {
        let temp = this[i];
        let j = i;
        while (j > 0) {
            if (this[j - 1] > temp) {
                // 大就往后排
                this[j] = this[j - 1];
            } else {
                break;
            }
            // j 是动态变化的 在循环终止时 j 的值就是要插入的位置
            j -= 1;
        }
        // 将暂存值插入指定位置
        this[j] = temp
    }

    return this
}

const arr = [2, 5, 4, 1, 3];
console.log(arr.insertionSort());