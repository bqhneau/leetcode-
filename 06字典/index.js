// 字典 Map
// 与集合类似 字典也是一种存储唯一值的数据结构 以【键值对】的形式来存储

const map = new Map();

// 1、set 用来 增加和修改
map.set('a',1);
map.set('a',2);
map.set('b',2);
console.log(map);

// 2、get 用来查看
map.get('a')

// 3、delete 用来删除
map.delete('a')
map.get('a')

// 4、clear 清空
map.clear()