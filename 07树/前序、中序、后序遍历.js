// 二叉树
// JavaScript 用 Object 模拟二叉树

const binaryTree = {
    val:1,
    left:{
        val:2,
        left:null,
        right:null,
    },
    right:{
        val:3,
        left:null,
        right:null,
    },
}

// 二叉树的三种遍历方法：前序 中序 后序

const bt = require('./bt');

// 先序遍历（中左右） preOrder
// 1、访问根节点
// 2、对根节点的 左子树 进行 先序遍历【递归】
// 3、对根节点的 右子树 进行 先序遍历【递归】

const preOrder = ( root )=> {
    if(!root) return;  // 避免传入的为 null
    // 1、访问根节点
    console.log(root.val);
    // 2、对根节点的 左子树 进行 先序遍历【递归】
    preOrder(root.left);
    // 3、对根节点的 右子树 进行 先序遍历【递归】
    preOrder(root.right);
}

preOrder(bt)




// 中序遍历（左中右）inOrder
// 1、对根节点的 左子树 进行 中序遍历
// 2、访问根节点
// 3、对根节点的 右子树 进行 中序遍历

const inOrder = (root) =>{
    if(!root) return
    // 左子树
    inOrder(root.left);
    // 根节点
    console.log(root.val);
    // 右子树
    inOrder(root.right)
}

inOrder(bt)






// 后序遍历（左右中）postOrder
// 1、对根节点的 左子树 进行 中序遍历
// 2、对根节点的 右子树 进行 中序遍历
// 3、访问根节点

const postOrder = (root) =>{
    if(!root) return
    // 左子树
    postOrder(root.left);
    // 右子树
    postOrder(root.right)
    // 根节点
    console.log(root.val);
}

postOrder(bt)