// 与链表不同
// 原型链 靠 __proto__ 指向下一节点 


// 常考知识

// 1、如果 a 沿着原型链能找到 B.prototype, 那么 a instanceof B 为 true
// 【如何理解】 JavaScript 规定 , 实例对象的 __proto__ 属性 == 构造函数的 prototype

const arr = []
console.log(arr instanceof Array);  // true
const func = () => {}
console.log(func instanceof Function);  // true
const obj = {}
console.log(obj instanceof Object);  // true

// 2、如果在 a 对象上没有找到 x 属性, 那么会沿着原型链【__proto__】找 x 属性, 直到找到 Object.prototype.__proto__ == null
const ob = {};
Object.prototype.x = 2;
console.log(ob.x);  // 2

// 面试题
var foo = {};
F = function(){}

Object.prototype.a = 'a';
Function.prototype.b = 'b'

console.log(foo.a);  // a
console.log(foo.b);  // undefined
console.log(F.a);    // a  因为会向上找【Object.prototype】
console.log(F.b);    // b
