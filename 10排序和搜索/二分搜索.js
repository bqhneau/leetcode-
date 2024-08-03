// 用于有序数组

Array.prototype.binarySearch = function (item) {

    let low = 0;  // 开始索引
    let high = this.length - 1;  // 结束索引

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let element = this[mid]  // 中间值
        if (item < element) {
            high = mid - 1
        } else if (item > element) {
            low = mid + 1
        } else {
            return mid
        }
    }

    return -1
}


const arr = [1, 2, 3, 4, 5];
console.log(arr.binarySearch(2));