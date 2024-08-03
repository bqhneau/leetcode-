// js 中 用数组和对象 表示图

// 表示方法: 邻接矩阵(数组) 邻接表(对象)

// 遍历方法：深度优先 广度优先

// 深度优先
// 1、访问根节点
// 2、对根节点的【没访问过的相邻节点】挨个进行深度优先

const graph = require('./graph');

const visited = new Set();
const dfs = (n) => {
    console.log(n);
    visited.add(n);
    graph[n].forEach(element => {
        if(!visited.has(element)){
            dfs(element)
        }
    });
}
console.log(dfs(2));



// 广度优先
// 1、访问根节点
// 2、对根节点的【没访问过的相邻节点】挨个进行广度优先

const visit = new Set();

const bfs = (n) =>{
    visit.add(n)
    const queue = [n];
    while(queue.length){
        const n = queue.shift();
        console.log(n);
        graph[n].forEach(item =>{
            if(!visit.has(item)){
                queue.push(item);
                visit.add(item)
            }
        })
    }
}

console.log(bfs(2));