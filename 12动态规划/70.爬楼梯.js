/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    // 类比成斐波那契数列
    // F(n) = F(n-1) + F(n-2)

    if (n < 2) return 1;

    const dp = [1, 1];
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]   // 从第二项开始 边遍历边向数组插入元素
    }

    return dp[n]  // 数组最后一项即方法总数
};



// 方法二 空间复杂度 O(1)
var climbStairs = function (n) {
    // 类比成斐波那契数列
    // F(n) = F(n-1) + F(n-2)

    if (n < 2) return 1;

    let dp0 = 1;
    let dp1 = 1;

    for (let i = 2; i <= n; i++) {
       [dp0,dp1] = [dp1,dp0+dp1]
    }

    return dp1
}