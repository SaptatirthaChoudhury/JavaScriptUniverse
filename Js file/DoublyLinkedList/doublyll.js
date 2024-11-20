// Creating Node //
class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}
// Creating doubly linked list class

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    insertAtStart(data) {
        let newnode = new Node(data);
        if (this.head == null || this.length == 0) {
            this.tail = newnode;
        }
        if (this.head != null) {
            this.head.prev = newnode;

        }

        newnode.next = this.head;
        this.head = newnode;
        this.length++;
    }
    insertAtEnd(data) {
        let newNode = new Node(data);
        if (this.head == null || this.length == 0) {
            this.insertAtStart(data);
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.length++;
    }
    InsertAtPositionX(data, pos) {
        let newNode = new Node(data);
        let i = 1;
      
        this.length++;
    }
    printDoublyLinkedList() {
        let currNode = this.head;

        while (currNode != null) {
            console.log(currNode.data);
            currNode = currNode.next;
        }
    }
}
let mylinkedlist = new DoublyLinkedList();
mylinkedlist.insertAtStart(10);


mylinkedlist.insertAtStart(20);


mylinkedlist.insertAtStart(30);


mylinkedlist.insertAtStart(40);

mylinkedlist.printDoublyLinkedList();
console.log(" After insertion at start ________________________");

mylinkedlist.insertAtEnd(222);
mylinkedlist.printDoublyLinkedList();
console.log("After insertion at end ________________________________");

mylinkedlist.InsertAtPositionX(551, 3);
mylinkedlist.printDoublyLinkedList();
console.log("Insertion at position over -------------------------------");