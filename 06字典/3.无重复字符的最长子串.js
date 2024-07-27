/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // 双指针与滑动窗口
    // 1、定义左指针 和 初始子串长度
    let l = 0;
    let res = 0;

    // 2、申明map 存放字符串和对应位置
    const map = new Map();

    // 3、声明右指针
    for(let r = 0; r<s.length; r++){
        // 如果重复且在滑动窗口内 则改变左指针【坑点】
        if(map.has(s[r]) && map.get(s[r])>= l){
            l = map.get(s[r]) + 1
        }

        res = Math.max(res, r - l + 1);
        // 字符串和对应位置
        map.set(s[r], r)
    }

    // 4、返回结果
    return res;
};