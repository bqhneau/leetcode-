var permute = function(nums) {
    // 1、递归模拟所有排列
    // 2、遇到重复项则回溯
    // 3、收集所有到达递归终点的情况

    const res = [];
    const rec = (path) => {
        // 递归出口
        if(path.length === nums.length) {
            res.push(path);
            return;
        }

        nums.forEach(element => {
            if(path.includes(element)) return;  // 重复就回溯
            rec(path.concat(element))  // 递归拼接
        });
    }
 
    rec([])  // 初次调用递归

    return res;
};