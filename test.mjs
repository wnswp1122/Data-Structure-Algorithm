import { Node, LinkedList } from "./LinkedList.mjs";

let Node1 = new Node(1);
let Node2 = new Node(2);
let Node3 = new Node(3);

Node1.next = Node2;
Node2.next = Node3;

console.log(Node1.data);
console.log(Node1.next.data);
console.log(Node1.next.next.data);

let list = new LinkedList();
console.log("===== insertAt() 다섯번 호출 =====");
list.insertAt(0, 0);
list.insertAt(1, 1);
list.insertAt(2, 2);
list.insertAt(3, 3);
list.insertAt(4, 4);
list.printAll();

console.log("===== clear() 호출 =====");
list.clear();
list.printAll();

console.log("===== insertLast() 호출 =====");
list.insertLast(1);
list.insertLast(2);
list.insertLast(3);
list.insertLast(4);
list.insertLast(5);
list.printAll();

console.log("===== deleteAt() 호출 =====");
list.deleteAt(0);
list.printAll();
list.deleteAt(2);
list.printAll();

console.log("===== deleteLast() 호출 =====");
list.deleteLast();
list.printAll();

console.log("===== getNode() 호출 =====");
list.getNode(1);
