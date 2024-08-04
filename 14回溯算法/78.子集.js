/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    // 1、所有子集  => 递归模拟所有情况
    // 2、没有重复 

    const res = [];

    const rec = (arr, length, start) => {
        if (arr.length == length) {
            res.push(arr)
            return;  // 每一次满足条件 追加并退出
        }

        for (let i = start; i < nums.length; i++) {   // 【遍历 nums】
            rec(arr.concat(nums[i]), length, i+1);  // 每次只拼接【start】后面的元素
        }
    }

    for (let i = 0; i <= nums.length; i++) {
        rec([], i, 0);   // 循环调用递归
    }

    return res;
};