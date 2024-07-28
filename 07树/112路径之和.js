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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    // 深度优先遍历

    let res = false

    if(!root) return res;

    const dfs = (root,value) => {
        console.log(root, value)
        // 在叶子节点处判断是否满足目标和
        if(!root.left && !root.right && value == targetSum) {
            res = true
            return res;
        }
        if(root.left) dfs(root.left, value + root.left.val)
        if(root.right) dfs(root.right, value + root.right.val)
    }

    dfs(root, root.val)

    return res
};