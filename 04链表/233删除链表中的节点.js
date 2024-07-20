/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    // 因为无法获取当前节点的上一个节点

    // 1、将被删节点的下一个值赋予当前节点
    node.val = node.next.val;

    // 2、改变指针 删除下一个节点
    node.next = node.next.next
};