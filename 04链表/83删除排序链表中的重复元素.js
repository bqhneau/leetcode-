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
var deleteDuplicates = function(head) {
    // 因为已经排序 => 相同元素一定相邻

    // 1、遍历链表
    let p = head;
    while(p && p.next){
        // 2、当相邻元素相同时，删除当前节点
        // 使用while时 , 删除完节点后需要重新判断 下一节点是否存在
        while(p.next && p.val == p.next.val){
            p.next = p.next.next
        }
        p = p.next;
    }
    return head;
};

// 法二
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
var deleteDuplicates = function(head) {
    // 因为已经排序 => 相同元素一定相邻

    // 1、遍历链表
    let p = head;
    while(p && p.next){
        // 2、当相邻元素相同时，删除当前节点
        if(p.val == p.next.val){
            p.next = p.next.next
        }else{
            // 这里一定要是在else 可能有多个连续重复的节点
            p = p.next;
        }
    }
    return head;
};