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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    const res = [];  // 存结果

    const stack = [];  // 模拟递归

    if (root) stack.push(root);

    while (stack.length) {
        let top = stack.pop();
        res.push(top.val);

        // 根左右 先右后左
        if(top.right) stack.push(top.right);
        if(top.left) stack.push(top.left);  // 栈顶元素的左右节点
    }


    return res
};