/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    // 最小的饼干给饭量最小的孩子 => 贪心

    // 1、排序
    // 2、遍历饼干 给符合胃口的孩子
    // 3、记录分出去几块饼干

    const func = (a,b) => a-b;
    g.sort(func);
    s.sort(func);

    let i = 0;
    // 遍历饼干 给符合胃口的孩子
    s.forEach(item => {
        if(item>=g[i]){
            i++
        }
    })

    return i;
};