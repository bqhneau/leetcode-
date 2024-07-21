/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    // 想象一个场景：两个人跑1000米 如果能够再次相逢 => 有环

    // 1、声明【一快一慢】两个指针【同一起点】出发
    let p1 = head;
    let p2 = head;
    
    while(p1 && p2 && p2.next) {
        p1 = p1.next
        p2 = p2.next.next
        // 2、如果能够再次相逢 则有环
        if(p1 == p2){
            return true;
        }
    }
    return false;
};