/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // 想象一个场景：n1 来 婚姻介绍所找对象 n2 / target -n1 
    // 如果能找到满足条件的另一半[map.has(target - n1)] 则返回下标 map.get()
    // 如果不同 则 登记在册 map.set()

    const map = new Map();
    for(let i = 0 ; i<nums.length; i++){
        const n1 = nums[i];
        const n2 = target - n1
        if(map.has(n2)){
            return [i,map.get(n2)]
        }else{
            map.set(n1,i)
        }
    }
};