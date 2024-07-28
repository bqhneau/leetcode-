const bt = require('./bt');

// 先序遍历
const preOrder = (root) =>{
    if(!root) return;

    const stack = [root];

    while(stack.length){
        // 用栈弹出元素 模拟递归返回
        const n = stack.pop()
        console.log(n.val);

        // 用压栈 模拟递归调用
        // 因为栈是后进先出 所以先 压入右节点
        if(n.right) stack.push(n.right)
        if(n.left) stack.push(n.left)
    }
}

preOrder(bt)



// 中序遍历
const inOrder = (root) => {
    if (!root) return;

    // 声明栈
    const stack = [];

    // 定义指针 跟踪节点
    let cur = root;

    while(stack.length || cur){
        // 遍历左子树 将所有子树的左节点入栈
        while(cur){
            stack.push(cur);
            cur = cur.left
        }

        // 弹出栈顶元素
        let pop = stack.pop()
        console.log(pop.val); 

        // 指向当前子树的右节点
        cur = pop.right
    }
}

inOrder(bt)




// 后序遍历
const postOrder = (root) => {
    if(!root) return;

    const stack1 = [root];
    const stack2 = [];

    // stack1 用来逆序入栈 stack2
    while(stack1.length){
        let pop = stack1.pop()
        stack2.push(pop)  // 根

        if(pop.left) stack1.push(pop.left);  // 左
        if(pop.right) stack1.push(pop.right);  // 右

        // 实际上进入 stack2 的 顺序为 根 右 左
        // 所以最终出栈顺序为 左 右 根 【妙不可言】
    }

    // stack2 出栈顺序 即结果
    while(stack2.length){
        let pop = stack2.pop();
        console.log(pop.val);
    }
}

postOrder(bt)