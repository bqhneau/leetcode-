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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    // 分解为：左子树与右子树 右子树与左子树 根节点的值相同

    if(!root) return true;

    const isMirror = (left,right) => {
        if(!left && !right) return true;

        if(left && right && left.val === right.val
            && isMirror(left.left, right.right) 
            && isMirror(left.right, right.left)
        ){
            return true;
        }

        return false
    };

    return isMirror(root.left,root.right)

};