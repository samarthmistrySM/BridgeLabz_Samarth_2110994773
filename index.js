const BST = require("./BST")
const prompt = require("prompt-sync")()
const bst = new BST();

// bst.insert(40);
// bst.insert(20);
// bst.insert(10);
// bst.insert(30);
// bst.insert(50);
// bst.insert(60);


const n = prompt("How many node you want to add in a tree: ")
for (let i = 0; i < n; i++) {
    const num = prompt("Enter Node: ")
    bst.insert(num);
}



console.log(bst.findMinNode(bst.root))
console.log(bst.findMaxNode(bst.root))