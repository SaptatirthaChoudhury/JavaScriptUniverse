// Creating Node class
class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}
// Creating Singly linked list class

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    insertAtStart(data) {
        let newnode = new Node(data);  // creating a new node with data

        newnode.next = this.head; // attach new node at the start of current head

        this.head = newnode; // update the head pointer to new node
        this.length++;
    }
    insertAtpositionX(data, pos) {
        if (pos == 0) {
            this.insertAtStart(data);
            return;
        }
        if (pos > this.length) {
            this.insertAtLast(data);
            return;
        }
        let i = 1;
        let position_node = new Node(data);
        let Pos_traverse = this.head;
        while (i != pos - 1) {
            Pos_traverse = Pos_traverse.next;
            i++;
        }
        position_node.next = Pos_traverse.next;
        Pos_traverse.next = position_node;
        this.length++;



    }
    insertAtLast(data) {
        if(this.head == null)
        {
            this.insertAtStart(data);
            return;
        }
        let lastnode = new Node(data);
        let traverse = this.head;
        while (traverse.next != null) {
            traverse = traverse.next;
        }
        traverse.next = lastnode;
        lastnode.next = null;
        this.length++;


    }
    printLinkedList() {
        let currNode = this.head;

        while (currNode != null) {
            console.log(currNode.data);
            currNode = currNode.next;
        }
    }
}
let mylinkedlist = new SinglyLinkedList();
console.log(mylinkedlist.head);
console.log(mylinkedlist.length);

mylinkedlist.insertAtStart(10);
console.log(mylinkedlist.head);
console.log(mylinkedlist.length);

mylinkedlist.insertAtStart(20);
console.log(mylinkedlist.head);
console.log(mylinkedlist.length);

mylinkedlist.insertAtStart(30);
console.log(mylinkedlist.head);
console.log(mylinkedlist.length);

mylinkedlist.insertAtStart(40);
console.log(mylinkedlist.head);
console.log(mylinkedlist.length);

mylinkedlist.insertAtStart(50);
console.log(mylinkedlist.head);
console.log(mylinkedlist.length);
//console.log("after insertion at start....................");
console.log("after insertion at last ....................");
mylinkedlist.insertAtLast(60);
mylinkedlist.printLinkedList();

console.log("after insertion at position x ....................");
mylinkedlist.insertAtpositionX(200, 50);
mylinkedlist.printLinkedList();



// function Node(value)
// {
//     this.data = value;
//     this.next = null;
// }
// let x = new Node([1, 2, 3, 4, "babai", ["sapta", "javascript", 2022]]);
// console.log(x.data);
// console.log(x.next);