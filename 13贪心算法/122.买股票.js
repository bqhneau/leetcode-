/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // 上帝视角 
    // 站在今天看昨天 如果赚就买

    let profit = 0;

    for(let i=0; i<prices.length;i++ ){
        if(prices[i]>prices[i-1]){
            profit += prices[i] - prices[i-1]
        }
    }

    return profit;
};