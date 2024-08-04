/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length === 0) return 0;

    const dp = [0,nums[0]];

    for(let i =2; i<= nums.length;i++){
        // 以 i=3为例
        // dp[i-2] + nums[i-1]  第一个和第三个的和
        // dp[i-1] 前两个房屋的最大值 要么1 要么2
        dp[i] = Math.max(dp[i-2] + nums[i-1], dp[i-1])
    }

    return dp[dp.length-1]
};