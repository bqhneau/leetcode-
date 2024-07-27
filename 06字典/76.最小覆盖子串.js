/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    // 【思路分析】
    // 双指针 控制 覆盖子串
    // 使用字典存储 应覆盖子串 类型与个数的映射关系
    // 右指针一直右移 如果完全覆盖 左指针一点一点移动 直至两个指针一直走到最右端
    // 记录满足条件的所有子串 返回最短的那个即可

    // 1、声明相关变量
    let l = 0;
    let r = 0;
    let res = ''

    //2、 使用字典存储 应覆盖子串 类型与个数的映射关系
    const need = new Map();
    for (let c of t){
        need.set(c, need.has(c) ? need.get(c)+1 : 1)
    }

    //3、needType 记录是否完全覆盖
    let needType = need.size;

    //4、右指针一直右移 如果完全覆盖 左指针一点一点移动 直至右指针一直走到最右端
    while(r<s.length){
        const cur = s[r];
        if(need.has(cur)){
            need.set(cur,need.get(cur) - 1);
            if(need.get(cur) == 0) needType -= 1
        }

        while(needType == 0){
            let newRes = s.substring(l, r+1);
            if(!res || newRes.length < res.length) res = newRes;
            const cur2 = s[l];
            if(need.has(cur2)){
                need.set(cur2, need.get(cur2)+1);
                if(need.get(cur2) == 1) needType += 1
            }
            l += 1
        }

        r += 1
    }

    return res

};