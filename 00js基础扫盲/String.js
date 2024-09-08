/*
    这里只记录一些在数组方法中没有的部分，同样的方法便不再赘述
*/

let string = ''

// 1、charAt()
// 类似于数组用中括号获取相应下标位置的数据 用来返回指定位置的字符 没有就返回 '' 
// 不改变原字符串
string = 'abcdefg';
let charAtRes = string.charAt(2)
let charAtRes2 = string.charAt(7)
console.log(string, charAtRes, charAtRes2); // abcdefg c ''



// 2、split()
// 使用指定的分隔符将字符串转化为数组
// 不改变原字符串
string = 'a*b*c*d*e*f'
let splitRes = string.split('*')
let splitRes2 = string.split('')
console.log(string, splitRes, splitRes2);
// a*b*c*d*e*f 
// [ 'a', 'b', 'c', 'd', 'e', 'f' ] 
// [
//     'a', '*', 'b', '*',
//     'c', '*', 'd', '*',
//     'e', '*', 'f'
// ]




// 3、match()
const str = '2018年结束了，2019年开始了，2020年就也不远了'
const reg = /\d+/g  // 这里是定义匹配规则，匹配字符串里的1到多个数字
console.log(str.match(reg))  // 输出符合匹配规则的内容，以数组形式返回 ['2018', '2019', '2020']
console.log(str.match('20'))  // 不使用正则 ["20", index: 0, input: "2018年结束了，2019年开始了"]
