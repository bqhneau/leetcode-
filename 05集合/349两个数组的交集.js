/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    // 1、去重
    nums1 = [...new Set(nums1)];
    nums2 = [...new Set(nums2)];

    // 2、求交集
    // return nums1.filter(i => new Set(nums2).has(i))
       return nums1.filter(i => nums2.includes(i))  // 使用数组原生方法

};