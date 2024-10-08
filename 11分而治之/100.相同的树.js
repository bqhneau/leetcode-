/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    // 结构相同 值相同 左子树相同 右子树相同

    if(!p && !q) return true;

    if(p && q && p.val === q.val 
        && isSameTree(p.left,q.left)
        && isSameTree(p.right,q.right)
    ){
        return true;
    }

    return false
};