// 双指针

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    // 先声明两个指针 一前一后排列 对应两条链表
    let cur = head  // 最终遍历完 指向null
    let pre = null  // 遍历完 指向5

    while(cur){
        // 为了避免cur的next找不到 先暂存一下
        next = cur.next
        // 改变指针方向（把当前指针的next指向前一个节点）
        cur.next = pre
        // 前指针后移 接手cur处理好的链表
        pre = cur
        // 当前指针后移 继续遍历
        cur = next
    }
    return pre
};