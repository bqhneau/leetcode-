const json = {
    a:{
        b:{
            c:1
        }
    },
    d:{
        e:2
    }
}

path = ['a', 'b', 'c']  // 沿着当前路径查找json值

let p = json;
path.forEach(element => {
    p = p[element]
});
console.log(p);  // 1