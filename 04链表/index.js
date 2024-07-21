// 链表 无序存储数据
// js 用 object 和 next 模拟 链表 linkedList

const a = {val:'1', next:null}
const b = {val:'2', next:null}
const c = {val:'3', next:null}
const d = {val:'4', next:null}

// 用 next 定义 下一个节点
a.next = b
b.next = c
c.next = d

// 1、遍历链表
let p = a;  // 声明指针p 默认指向 a
while(p){
    console.log(p.val);
    p = p.next // 将指针移到下一个元素
}

// 2、插入元素
const e = {val:'5'}
// 通过改变 next 插入元素
c.next = e;
e.next = d;

// 3、删除元素
c.next = d
