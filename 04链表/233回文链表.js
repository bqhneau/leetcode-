/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 法一 数组方法
var isPalindrome = function(head) {
    // 转换为数组，用数组的方法来判断是否为回文
    const arr = []
    p = head
    while(p) {
        arr.push(p.val)
        p =p.next
    }

    // 数组首尾同时遍历
    for(let i=0, j=arr.length-1 ; i<j ;i++,j--){
        if(arr[i] !== arr[j] ){
            return false
        }
    }
    return true;
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (!head || !head.next) {
        return true; // 空链表或只有一个元素的链表是回文
    }

    let slow = head;
    let fast = head;

    // 使用快慢指针找到链表的中点
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // 【精髓所在】快指针每次移动两步，慢指针每次移动一步。这样当快指针到达链表末尾时，慢指针将处于中间位置。
    // 反转中点之后的链表
    slow.next = reverseList(slow.next);
    slow = slow.next;

    // 比较前半部分和反转后的后半部分
    let p = head;
    while (slow) {
        if (p.val !== slow.val) {
            return false;
        }
        p = p.next;
        slow = slow.next;
    }

    return true;
};

/**
 * 反转链表的辅助函数
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseList(head) {
    let prev = null;
    let current = head;
    while (current) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}
