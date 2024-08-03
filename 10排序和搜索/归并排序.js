// fox
// 思路分析 
// 分：劈成两半 直至长度为 1 O(logN)
// 合：合并有序数组 直至完整 O(n)

// 时间复杂度：O(n)*O(logN) 
// 空间复杂度：


Array.prototype.mergeSort = function () {
    const rec = (arr) => {
        if (arr.length <= 1) return arr;

        /*
            就挺奇妙的：
                · 首先递归调用将数组一点点拆开，在拆的过程中，如果拆到不能再拆，则返回值存入 orderLeft 和 orderRight
                · 一旦orderLeft 和 orderRight有值 则开始合并
                · 这个递归函数 每次的返回值 均为合并后的数组
                · 就这样逐层返回 逐层合并 直至返回完整数组
        */

        // 1、分
        const mid = Math.floor(arr.length / 2);
        const left = arr.slice(0, mid);
        const right = arr.slice(mid, arr.length);
        console.log('left',left,right);
        const orderLeft = rec(left);  // 有序的左边数组
        const orderRight = rec(right);  // 有序的右边数组
        console.log('orderLeft',orderLeft,orderRight);

        // 2、合-合并有序数组
        const res = [];
        console.log('length',orderLeft.length,orderRight.length);
        while (orderLeft.length || orderRight.length) {
            if (orderLeft.length && orderRight.length) {
                res.push(orderLeft[0] < orderRight[0] ? orderLeft.shift() : orderRight.shift());
            } else if (orderLeft.length) {
                res.push(orderLeft.shift());
            } else if (orderRight.length) {
                res.push(orderRight.shift());
            }
        }
        console.log('res',res);
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