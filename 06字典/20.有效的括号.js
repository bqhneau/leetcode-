/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []

    // 使用 map 引入映射关系
    const map = new Map();
    map.set('(',')');
    map.set('[',']');
    map.set('{','}');

    if(s.length % 2 === 1) return false

    for(i=0;i<s.length;i++){
        // 当前字符串
        const cur = s[i]
        // 优化点 1
        if(map.has(cur)){
            stack.push(cur)
        } else{
            // 栈顶元素
            const top = stack[stack.length -1]
            // 优化点2
            if (map.get(top) == cur){
                stack.pop()
            }else{
                return false
            }
        }
    }

    return stack.length === 0
};