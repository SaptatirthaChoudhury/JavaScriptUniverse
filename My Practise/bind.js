// bind, call, apply 

// const user = {
//     name: "Codersgyan",
//     printName() {
//         console.log(this);
//     }
// };

// const user2 = {
//     name: 'johndoe'
// }

// const print = user.printName.bind(user2)
// print()


// Function borrowing

const user = {
    flname: 'Coders',
    lname: 'Gyan',
    getFullName() {
        return `${this.fname} ${this.lname}`
    }
}

const user2 = {
    flname: 'John',
    lname: 'Doe'
}




