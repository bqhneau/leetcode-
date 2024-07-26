let arr = [];

/*
    1——4 为数组增删方法 均改变原数组
*/
// 0、reverse 翻转数组 改变原数组 返回值与原数组一致为翻转后的数组
arr = [1,3,5]
let reverseRes = arr.reverse()
console.log(arr, reverseRes);



// 1、push 从数组后面追加元素【入栈/入队】 改变原数组 返回值为新数组的长度
arr = []
let pushRes = arr.push(1);
console.log(arr, pushRes);  // [ 1 ] 1
arr.push(2)


// 2、pop 从数组前面取出元素【出栈】 改变原数组 返回值为删掉的元素
arr = [1,2]
let popRes = arr.pop()
console.log(arr, popRes);  // [ 1 ] 2


// 3、unshift 从数组前面插入元素 改变原数组 返回值为新数组的长度
arr = [1]
let unshiftRes = arr.unshift(3)
console.log(arr, unshiftRes); // [ 3, 1 ] 2


// 4、shift 从数组后面取出元素 改变原数组 返回值为删掉的元素
arr = [3,2]
let shiftRes = arr.shift()
console.log(arr, shiftRes); // [ 1 ] 3


/*
    5、6 经常问区别 数组是否改变之类 不要混淆
*/ 

// 5、slice(start, end) 用于截取数组 左闭右开 不改变原数组 返回值为截取到的数组
arr = [1,3,5,7,9,11]
let sliceRes = arr.slice(0, 3)
console.log(arr, sliceRes);  // [ 1, 3, 5, 7, 9, 11 ] [ 1, 3, 5 ]
let sliceRes2 = arr.slice(0, -1)  // 等价于 [0 , arr.length-1)
console.log(sliceRes2);   // [ 1, 3, 5, 7, 9 ]



// 6、splice(start, delCount, item1,item2...)
// 用于替换、删除、新增元素 改变原数组 返回值为删除的元素组成的数组 如无删除 则返回空数组

// 用于替换
arr = [1,2,3,4,5]
let spliceRes = arr.splice(1,3,111,222)
console.log(arr, spliceRes);  // [ 1, 111, 222, 5 ] [ 2, 3, 4 ]

// 用于删除
arr = [1,2,3,4,5]
let spliceRes2 = arr.splice(2,1)
console.log(arr, spliceRes2); // [ 1, 2, 4, 5 ] [ 3 ]

// 用于新增
arr = [1,2,3,4,5]
let spliceRes3 = arr.splice(2,0,11,12)
console.log(arr, spliceRes3);  // [1, 2, 11, 12, 3, 4, 5] []



/*
    7、8、9 均不改变 原数组
*/ 


// 7、concat 用于数组的拼接 不改变原数组 返回值为在原数组后面拼接完的数组
const arr1 = [1, 3, 5]
const arr2 = [2, 4, 6]
let concatRes = arr1.concat(arr2)
let concatRes2 = arr2.concat(arr1)
console.log(arr1, arr2, concatRes, concatRes2); // [ 1, 3, 5 ] [ 2, 4, 6 ] [ 1, 3, 5, 2, 4, 6 ] [ 2, 4, 6, 1, 3, 5 ]


// 8、join 将数组转为以特定字符分割的字符串 不改变原数组 返回值为转化好的字符串
arr = [1,2,3,4,5]
let joinRes = arr.join(',')
console.log(arr, joinRes); // [ 1, 2, 3, 4, 5 ] 1,2,3,4,5


// 9、toString() 将数组转化为字符串 逗号隔开 原数组不变
arr = [2,3,6,7,8]
let toStringRes = arr.toString()
console.log(arr, toStringRes); // [ 2, 3, 6, 7, 8 ] 2,3,6,7,8


/*
    10——14 是数组的查找方法 均不改变 原数组
*/ 


// 10、indexOf() 
// 用来查找数组中的值 找到返回索引 找不到返回-1 原数组不变
arr = [1,2,3,4,5]
let indexOfRes = arr.indexOf(2)
let indexOfRes2 = arr.indexOf(0)
console.log(arr, indexOfRes,indexOfRes2);  // [1,2,3,4,5] 1 -1



// 11、includes()
// 用来查找数组中的值 找到返回true 找不到返回false 原数组不变
arr = [2,4,6,7,8]
let includesRes = arr.includes(2);
let includesRes2 = arr.includes(0);
console.log(arr, includesRes, includesRes2); // [ 2, 4, 6, 7, 8 ] true false



// 12、lastIndexOf
// 用来查找某元素最后一次出现的位置 找到返回索引 找不到返回-1 原数组不变
arr = [1,2,3,2,1]
let lastIndexOfRes = arr.lastIndexOf(1)
let lastIndexOfRes2 = arr.lastIndexOf(0)
console.log(arr, lastIndexOfRes, lastIndexOfRes2); // 4 -1



// 13、find 
// 用来查找比较复杂的数组 比如数组里面的元素是对象
// 返回查找到的第一个指定元素 而不是数组 如果找不到即为 undefined
// 原数组不变
arr = [
    {name: 'apples', quantity: 2},
    {name: 'apples', quantity: 1},
    {name: 'bananas', quantity: 0},
    {name: 'orange', quantity: 5}
];
let findRes = arr.find(item => item.name == 'apples')
let findRes2 = arr.find(item => item.name == 'apples1')
console.log(arr, findRes, findRes2);  // 原数组 { name: 'apples', quantity: 2 } undefined



// 14、filter
// 用来过滤数组 
// 返回满足过滤条件的所有元素的数组 如果都不满足返回空数组
arr = [1,2,3,4,5]
let filterRes = arr.filter(item => item % 2 == 1)
let filterRes2 = arr.filter(item => item >= 6)
console.log(arr, filterRes, filterRes2);  // [ 1, 2, 3, 4, 5 ] [ 1, 3, 5 ] []
