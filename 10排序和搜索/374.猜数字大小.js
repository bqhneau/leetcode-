/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let low = 1;
    let high = n;

    while(low<=high){
        let mid = Math.floor((low+high)/2);
        // mid 模拟我猜的数字
        let res = guess(mid)   // 调用函数会告诉我猜的情况
        if(res == 0) {
            return mid
        }else if(res == -1){
            high = mid -1
        }else{
            low = mid + 1
        }
    }
};