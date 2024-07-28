// 思路分析
// 分区：任选一个基准 小的放前面 大的放后面 O(n)
// 递归：对基准前后的数组 再次 进行分区 O(logN)

// 时间复杂度:O(n)*O(logN)

Array.prototype.quickSort = function () {
    const rec = (arr) =>{
        // 递归结束条件
        if(arr.length <= 1) return arr;

        const left = [];
        const right = [];
        const mid = arr[0];

        // 1、分区
        for(let i = 1; i < arr.length; i++){
            if(arr[i] < mid){
                left.push(arr[i]);
            }else{
                right.push(arr[i])
            }
        }

        // 2、递归
        return [...rec(left), mid, ...rec(right)]
    }

    const res = rec(this);
    res.forEach((element, index) => {
        this[index] = element
    });

    return this
}

const arr = [2,5,4,1,3];
console.log(arr.quickSort());