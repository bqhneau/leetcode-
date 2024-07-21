/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // 1、声明链表
    let result = new ListNode(0)

    // 2、为遍历链表做准备
    let p1 = l1;
    let p2 = l2;
    let p3 = result;

    // 3、遍历链表 按位相加
    let carry = 0
    while(p1 || p2){
        const add1 = p1 ? p1.val : 0
        const add2 = p2 ? p2.val : 0
        const val = add1 + add2 + carry;
        carry = Math.floor(val / 10)
        p3.next = new ListNode(val % 10)
        if (p1) p1 = p1.next
        if (p2) p2 = p2.next
        p3 = p3.next
    }
    if(carry) p3.next = new ListNode(carry);
    return result.next;
};