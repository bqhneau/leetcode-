// 深度优先遍历：
// 1、访问根节点
// 2、对根节点 的 children 挨个进行深度优先遍历[递归]

const tree = {
    val:'a',
    children:[
        {
            val:'b',
            children:[
                {
                    val:'d',
                    children:[],
                },
                {
                    val:'e',
                    children:[],
                },
            ],
        },
        {
            val:'c',
            children:[
                {
                    val:'f',
                    children:[],
                },
                {
                    val:'g',
                    children:[],
                },
            ],
        },
    ]
}

const dfs = (root) =>{
    // 1、访问根节点
    console.log(root.val);
    // 2、对根节点 的 每个children 进行深度优先遍历[递归]
    root.children.forEach(child => dfs(child));
}

dfs(tree);

// 二叉树的深度优先遍历
const dfsBir = (root) =>{
    if(!root) return []
    // 1、访问根节点
    console.log(root.val);
    // 2、对根节点 的 每个children 进行深度优先遍历[递归]
    if(root.left) dfsBir(root.left);
    if(root.right) dfsBir(root.right);
}




// 广度优先遍历 BFS
// 1、新建一个队列, 把根节点入队
// 2、把队头出队并访问
// 3、把队头的children挨个入队
// 4、重复二三步, 直至队列为空

const bfs = (root) =>{
    // 1、新建一个队列, 把根节点入队
    const queue = [root];
    // 4、重复二三步, 直至队列为空
    while(queue.length > 0){
        // 2、把队头出队并访问
        const n = queue.shift();
        console.log(n.val);
        // 3、把队头的children挨个入队
        n.children.forEach(child => queue.push(child));
    }
}

bfs(tree)

// 二叉树中的广度优先
const bfsBir = (root) =>{
    // 1、新建一个队列, 把根节点入队
    const queue = [];
    if(root) queue.push(root);
    // 4、重复二三步, 直至队列为空
    while(queue.length > 0){
        // 2、把队头出队并访问
        const top = queue.shift();
        console.log(top.val);
        // 3、把队头的【左右节点】挨个入队
        if(top.left) queue.push(top.left)
        if(top.right) queue.push(top.right)
    }
}
