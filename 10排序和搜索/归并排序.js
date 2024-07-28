// 思路分析 
// 分：劈成两半 直至长度为 1 O(logN)
// 合：合并有序数组 直至完整 O(n)

// 时间复杂度：O(n)*O(logN) 
// 空间复杂度：


Array.prototype.mergeSort = function () {
    const rec = (arr) => {
        if (arr.length <= 1) return arr;

        // 1、分
        const mid = Math.floor(arr.length / 2);
        const left = arr.slice(0, mid);
        const right = arr.slice(mid, arr.length);
        const orderLeft = rec(left);
        const orderRight = rec(right);

        // 2、合
        const res = [];
        while (orderLeft.length || orderRight.length) {
            if (orderLeft.length && orderRight.length) {
                res.push(orderLeft[0] < orderRight[0] ? orderLeft.shift() : orderRight.shift());
            } else if (orderLeft.length) {
                res.push(orderLeft.shift());
            } else if (orderRight.length) {
                res.push(orderRight.shift());
            }
        }
        return res;
    };

    const res = rec(this);
    res.forEach((element, index) => {
        this[index] = element
    });

    return this
}

const arr = [2, 5, 4, 1, 3];
console.log(arr.mergeSort());