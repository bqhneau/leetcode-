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
 * @return {number}
 */
var maxDepth = function(root) {
    // 深度优先遍历 记录每一层级
    let res = 0;

    const dfs = (root, count) => {
        if(!root) return;
        console.log(root.val, count);
        if( !root.left && !root.right){
            // 遍历时 count 可能会小于之前深度 我们取最大的
            res = Math.max(res, count)
        }
        // 深度优先遍历的同时 记录层级
        dfs(root.left,count + 1);
        dfs(root.right,count + 1);
    }
    dfs(root, 1);

    return res;
};



// 方法二
var maxDepth = function(root) {
    if(!root) return 0;

    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
};


// 空间复杂度 O(n) - O(logN)