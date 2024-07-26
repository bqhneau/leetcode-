// 1、foreach
// 用于遍历数组 并不修改数组
// 无法中断（即无法通过正常的 return break 跳出循环）可以通过抛出异常跳出循环
// 没有返回值
// 如果数组内为基本数据类型 原数组不会被改变
let arr = [1,2,3,4,5]
let foreachRes = arr.forEach(item => item*2);
console.log(arr, foreachRes);

// 如果是复杂数据类型且只修改属性 原数组会被改变
let objArr = [
    { name: '张三', age: 28 },
    { name: '李四', age: 30 },
];
let foreachRes2 = objArr.forEach(item => item.age = 30)
console.log(objArr, foreachRes2);




// 2、map
// 用于遍历数组 重写数组等
// 如果是复杂数据类型且只修改属性 原数组会被改变
// 与 foreach区别 有返回值
arr = [
    { name: '张三', age: 28 },
    { name: '李四', age: 30 },
];
let mapRes = arr.map(item => item.age++)
console.log(arr, mapRes);
