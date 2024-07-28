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

// 递归版
var inorderTraversal = function(root) {
    const res = [];

    const inOrder = (root) => {
        if(!root) return [];
        inOrder(root.left);
        res.push(root.val);
        inOrder(root.right);
    }

    inOrder(root)

    return res;
};


// 迭代版
var inorderTraversal = function (root) {
    const res = [];
    let cur = root;
    const stack = [];

    while (stack.length || cur) {
        while (cur) {
            stack.push(cur);
            cur = cur.left;
        }

        let top = stack.pop()
        res.push(top.val)

        cur = top.right
    }

    return res;
};