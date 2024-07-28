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
var minDepth = function(root) {
    // 广度优先 遇到叶子节点 返回层级

    if(!root) return;

    const queue = [[root, 1]];

    while(queue.length){
        let [top, count] = queue.shift();
        console.log(top.val, count);

        // 遇到叶子节点 返回层级 
        if(!top.left && !top.right) {
            return count
        }
        if(top.left) queue.push([top.left, count+1]);
        if(top.right) queue.push([top.right, count+1]);
    }
};