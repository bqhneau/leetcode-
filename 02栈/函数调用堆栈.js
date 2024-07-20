// 最后调用的最先执行

const f1 = () =>{
    console.log(f1);
    f2()
}

const f2 = () =>{
    console.log(f2);
    f3();
}

const f3 = () =>{
    console.log(f3);
}

f1()