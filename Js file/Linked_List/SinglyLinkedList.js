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
        this.tail = null;
        this.length = 0;
    }

    insertAtStart(data) {
        let newnode = new Node(data);  // creating a new node with data
        if (this.head == null || this.length == 0) {
            this.tail = newnode;      // attach newnode to tail pointer
        }

        newnode.next = this.head; // attach new node at the start of  head pointer also

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
        if (this.head == null) {
            this.insertAtStart(data);
            return;
        }
        let lastnode = new Node(data);
        this.tail.next = lastnode;
        this.tail = lastnode;
        this.length++;


    }
    updateDataAtPosition(data, pos) {
        if (this.head == null || this.length == 0) {
            console.log("As list is empty so your request is invalid !");
            return;
        }
        let i = 0;

        let curr = this.head;
        while (i != pos - 1) {
            curr = curr.next;
            i++;
        }
        curr.data = data;
    }

    DeleteNodeFromStart() {
        if (this.head == null || this.length == 0) {
            console.log("List is empty so can't perform delete operation ");
            return;
        }
        let curr = this.head;
        this.head = this.head.next;
        curr = null;
        this.length--;


    }
    DeleteNodeFromPositionX(position) {
        if (position == 0) {
            this.DeleteNodeFromStart();
            return;
        }
        else if (position == this.length) {
            this.DeleteNodeFromLast();
            return;
        }
        else if (this.head == null || this.length == 0 || position > this.length) {
            console.log("Invalid position");
            return;
        }
        else {
            let i = 1;
            let left = this.head;
            let right = left.next;
            while (i != position - 1) {
                left = left.next;
                right = right.next;
                i++;
            }
            left.next = right.next;
            right = null;
            this.length--;

        }



    }

    DeleteNodeFromLast() {
        if (this.head == null || this.length == 0) {
            console.log("List is empty so can't perform delete operation ");
            return;
        }
        let lastpointer = this.head;
        while (lastpointer.next.next != null) {
            lastpointer = lastpointer.next;
        }
        lastpointer.next = null;
        this.tail = lastpointer;





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

// console.log("Below we have  inserted at last ....................");
// mylinkedlist.insertAtLast(60);
// mylinkedlist.printLinkedList();

// console.log("Below we have inserted at position x ....................");
// mylinkedlist.insertAtpositionX(666, 3);
// mylinkedlist.printLinkedList();

// console.log("Below we have updated at position x.......................");
// mylinkedlist.updateDataAtPosition(111, 2);
// mylinkedlist.printLinkedList();

// console.log("Below we have deleted the first node......................");
// mylinkedlist.DeleteNodeFromStart();
// mylinkedlist.printLinkedList();

// console.log("Below we have deleted the node from X position..............");
// mylinkedlist.DeleteNodeFromPositionX(3);
// mylinkedlist.printLinkedList();

// console.log("Below we have deleted the node from last position...........");
// mylinkedlist.DeleteNodeFromLast();
// mylinkedlist.printLinkedList();

// console.log("Again inserting node ..........");
// mylinkedlist.insertAtpositionX(1001, 3);
mylinkedlist.printLinkedList();



