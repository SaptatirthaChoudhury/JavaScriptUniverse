const { log  } = require("node:console");

const myObj = {
    items: [10, 20, 30],
    [Symbol.iterator]() { // Now this object can be iterated as [Symbol.iterator]() has been implemented into myObj. 
        let index = 0;
        return {
            next: () => index < this.items.length
                ? { value: this.items[index++], done: false }
                : { done: true, message: 'Iteration completed' }
        }
    }
}

for (let value of myObj) {
    console.log(value)
}

const iterator = myObj[Symbol.iterator]()
log(iterator.next)

log(iterator.next())
log(iterator.next())
log(iterator.next())
log(iterator.next())