class Stack {
    constructor() {
        this.data = [];
        this.top = -1;
        this.maxSize = 5;
    }
    size() {
        return this.top + 1;
    }

    isEmpty() {
        if (this.top == -1) {
            return true;
        }
    }

    push(element) {
        if (this.top + 1 >= this.maxSize) {
            // throw new Error("Stack Overflow");
            console.error("Stack Overflow !" + " " + this.data[this.top] + " " + "cant push");
        }
        this.top++;
        this.data[this.top] = element;
    }

    pop() {
        if (this.isEmpty()) {

            console.error("Stack Underflow !" + " " + this.data[this.top] + " " + "cant pop");
            // throw new Error("Stack Underflow");
        }
        this.top--;
    }

    peek() {
        if (this.isEmpty()) {
            // throw new Error("Stack Empty");
            console.error("Stack is Empty");

        }
        return this.data[this.top];
    }
    insertElementAtBottom(value) {

    }
}
let myStack = new Stack();

myStack.push(10);
console.log(myStack.peek());

myStack.push(20);
console.log(myStack.peek());

myStack.push(30);
console.log(myStack.peek());

myStack.pop();
console.log(myStack.peek());


myStack.pop();
console.log(myStack.peek());

myStack.pop();

myStack.push(100);
console.log(myStack.peek());

myStack.pop();
myStack.push(300);
console.log(myStack.peek());
myStack.push(350);
console.log(myStack.peek());
myStack.push(400);
console.log(myStack.peek());
myStack.push(450);
console.log(myStack.peek());
myStack.push(500);
console.log(myStack.peek());
myStack.push(550);
console.log(myStack.peek());


