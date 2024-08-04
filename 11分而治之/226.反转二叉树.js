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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    // 出口
    if(!root) return null;  // 保证空的节点仍然为空

    return{
        val:root.val,
        left:invertTree(root.right),
        right:invertTree(root.left)
    }
};