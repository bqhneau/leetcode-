let mySet = new Set();

// 1、add
mySet.add(1)
mySet.add(2)
mySet.add(2)
mySet.add(5)
console.log(mySet);  // Set(2) { 1, 2 }

// 2、has
const has = mySet.has(1)
console.log(has);  // true

// 3、delete
mySet.delete(2)
console.log(mySet);  // Set(1) { 1 }

// 4、size
console.log(mySet.size);  // 1

// 5、迭代 for of
for (const [key,value] of mySet.entries()) {
    console.log(key,value); // key value 一样
}
console.log(mySet.keys());  // [Set Iterator] { 1, 5 }
console.log(mySet.values());  // [Set Iterator] { 1, 5 }


// 6、与数组的转换
const arr = Array.from(mySet);
console.log(arr);  // [ 1, 5 ]

const set = new Set(arr)
console.log(set);  // Set(2) { 1, 5 }

// 7、求交集
const set2 = new Set([2, 5]);
const intersection = new Set([...set].filter(i => set2.has(i)));
console.log(intersection);  // Set(1) { 5 }

// 8、求差集
const difference = new Set([...set].filter(i => !set2.has(i)));
console.log(difference);  // Set(1) { 1 }
