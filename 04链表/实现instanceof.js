const instanceOf = (a , B) => {

    let p = a;

    // 遍历a的原型链 看是否能找到 B
    while(p){
        if(p === B.prototype){
            return true
        }
        p = p.__proto__;  // 沿着 __proto__ 遍历
    }

    return false
}


const arr = []
console.log(instanceOf(arr,Array));  // true