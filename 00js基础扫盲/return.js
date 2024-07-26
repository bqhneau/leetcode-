// 遇到 return 就会结束当前语句 
// return 后的语句不会执行

for(let i = 0; i<10; i++){
    if(i>5){
        return;
    }
    console.log('for内',i);
}
console.log('外面',i);  // 不会执行