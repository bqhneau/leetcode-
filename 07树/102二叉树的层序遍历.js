/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];

    let queue = [[root,0]];
    const res = []

    while(queue.length){
        let [top, level] = queue.shift();
        console.log(top.val, level);

        // 实际上用二维数组存放结果 这也是层级从0开始的原因 与数组索引对应
        if(!res[level]) {
            res.push([top.val])
        }else{
            res[level].push(top.val)
        }

        if(top.left) queue.push([top.left, level + 1]);
        if(top.right) queue.push([top.right, level + 1]);
    }

    return res;
};