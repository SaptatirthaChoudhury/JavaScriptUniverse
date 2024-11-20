// ____*  Using ‘new’ with user defined constructor function ___* //

//___* What if we had to create hundreds of person objects? You can imagine the pain now. So, to get rid of manually adding properties to the objects, we create custom (or user-defined) functions. We first create a constructor function and then use the ‘new’ keyword to get objects___*//

function Person(fname, lname) {
    this.firstName = fname;
    this.lastName = lname;
}

const personOne = new Person('Babai', 'Choudhury');
const personTwo = new Person('Mohor', 'Choudhury');

console.log(personOne);
console.log(personTwo);