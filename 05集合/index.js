// 集合 Set
// 一种【无序且唯一】的数据结构

// 1、去重
const arr = [1, 1, 2, 2]
const uniqueArr = [...new Set(arr)]
console.log(arr, uniqueArr);


// 2、判断元素是否在集合中
const set = new Set(arr)
const has = set.has(3)
console.log(has);  // false

// 3、求交集
const set2 = new Set([2, 3]);
const result = new Set([...set].filter(i => set2.has(i)));
console.log(result);