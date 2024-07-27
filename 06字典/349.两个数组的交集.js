/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    // map 本质上是键值对的集合 映射关系 不会重复

    // 1、建立 num1 的映射关系
    const map = new Map()
    nums1.forEach(i=> {
        map.set(i, true)
    })

    // 2、遍历 num2 查找 map 中有没有 有就追加到res中
    const res = []
    nums2.forEach(item => {
        if(map.has(item)){
            res.push(item);
            // 为了防止追加相同元素 追加完就删除字典中对应元素
            map.delete(item)
        }
    })

    // 3、将结果返回
    return res;
};