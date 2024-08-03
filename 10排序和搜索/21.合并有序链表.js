/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    const res = new ListNode(0);
    
    let p = res;
    let p1 = list1;
    let p2 = list2;

    // p1 p2 同时存在
    while(p1 && p2){
        if(p1.val < p2.val){
            p.next = p1;
            p1 = p1.next;
        }else{
            p.next = p2;
            p2 = p2.next
        }
        p = p.next  // p 一直再最后
    }

    // p1 p2 只存在一个 
    if(p1) p.next = p1;
    if(p2) p.next = p2;

    return res.next
};