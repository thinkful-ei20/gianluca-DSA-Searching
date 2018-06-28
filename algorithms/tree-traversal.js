const BinarySearchTree = require('./utils/bst.js');
const Queue = require('./utils/queue.js');


const preOrder = node => {
	if(!node) return;

	console.log(node.key);

	preOrder(node.left);
	preOrder(node.right);
};

const inOrder = node => {
	if(!node) return;

	inOrder(node.left);
	console.log(node.key);
	inOrder(node.right);
};

const postOrder = node => {
	if(!node) return;

	postOrder(node.left);
	postOrder(node.right);
	console.log(node.key);
};

const reverseOrder = node => {
	if(!node) return;

	reverseOrder(node.right);
	console.log(node.key);
	reverseOrder(node.left);
};

const bfs = (_node, q) => {
	q.enqueue(_node);
	while(!q.isEmpty()) {
		const node = q.dequeue();
		console.log(node.value.key);
		if(node.value.left) q.enqueue(node.value.left);
		if(node.value.right) q.enqueue(node.value.right);
	}
};


const main = () => {
	const bst = new BinarySearchTree();

	bst.insert(25);
	bst.insert(15);
	bst.insert(50);
	bst.insert(10);
	bst.insert(24);
	bst.insert(35);
	bst.insert(70);
	bst.insert(4);
	bst.insert(12);
	bst.insert(18);
	bst.insert(31);
	bst.insert(44);
	bst.insert(66);
	bst.insert(90);
	bst.insert(22);
	console.log('\n[/=/=/=/=/=/=/=/=/=/=[TREE TRAVERSALS]=/=/=/=/=/=/=/=/=/=/]\n');
	console.log('~~~~~~~~~~~~~~~~\\');
	console.log('~~~PRE-ORDER~~~~/');
	preOrder(bst);
	console.log('~~~~~~~~~~~~~~~~\\');
	console.log('~~~~IN-ORDER~~~~/');
	inOrder(bst);
	console.log('~~~~~~~~~~~~~~~~~\\');
	console.log('~~~POST-ORDER~~~~/');
	postOrder(bst);
	console.log('~~~~~~~~~~~~~~~~~\\');
	console.log('~~REVERSE-ORDER~~/');
	reverseOrder(bst);
	console.log('~~~~~~~~~~~~~~~~~\\');
	console.log('~~~LEVEL-ORDER~~~/');
	const q = new Queue();
	bfs(bst, q);
	console.log('[/=/=/=/=/=/=/=/=/=/=/=/=/=[END]=/=/=/=/=/=/=/=/=/=/=/=/=/]\n');
};

main();