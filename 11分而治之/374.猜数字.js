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
    // 分而治之思想 巧妙地return

    const rec = (low, high) =>{
        if(low>high) return;

        let mid = Math.floor((low+high)/2);
        let res = guess(mid)

        if(res === 0) {
            return mid
        } else if(res === -1){
           return rec(low,mid-1)
        }else{
           return rec(mid+1, high)
        }
    }

    return rec(1,n)
};