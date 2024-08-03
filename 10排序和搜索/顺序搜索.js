// 遍历数组 有就返回索引 没有返回-1
// 时间复杂度：O(n)

Array.prototype.sequentialSearch = function(item){
    for(let i = 0; i<this.length;i++){
        if(this[i] == item){
            return i;
        }
    }

    return -1;  // 循环完没找到返回-1
}

const arr = [1,2,3,4,5];
console.log(arr.sequentialSearch(3));