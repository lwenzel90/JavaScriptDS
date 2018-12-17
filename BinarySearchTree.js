class Node {
    constructor(value){
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

Node.prototype.addNode = function(node){
    if(node.value < this.value){
        if(this.left === null){
            this.left = node;
        } else {
            this.left.addNode(node);
        }
    } else if (node.value > this.value) {
        if(this.right === null){
            this.right = node;
        } else{
            this.right = node;
        }
    }
}

Node.prototype.visit = function(){
    if(this.left !== null){
        this.left.visit();
    }
    console.log(this.value);
    if(this.right !== null){
        this.right.visit();
    }
}
Node.prototype.search = function(value){
    if(this.value == value){ 
        return value
    } else if(value < this.value && this.left !== null){ 
        return this.left.search(value);
    }
    if(value > this.value && this.right !== null){ 
        return this.right.search(value);
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
}

BinarySearchTree.prototype.insert = function(value) {
    let node = new Node(value);
    if(this.root == null){ 
        this.root = node;
    } else {
        this.root.addNode(node);
    }
}

BinarySearchTree.prototype.traverse = function(){
    this.root.visit();
}

BinarySearchTree.prototype.search = function(value){
    let found =  this.root.search(value);
    return (typeof found != 'undefined');
}

let tree = new BinarySearchTree();
tree.insert(8);
tree.insert(9);
tree.insert(6);
tree.insert(5);
tree.insert(7);

