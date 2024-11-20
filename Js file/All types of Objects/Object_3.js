//*___Using ES6 classes to create objects_____* //

//*____The constructor functions are now replaced by classes as they are supported through ES6 specifications. Let’s see the code now.____* //

class person {
    constructor(name, department) {
        this.name = name;
        this.department = department;

        console.log("My name is" + " " + this.name + " " + "and my department is" + " " + this.department);

    }
}
console.log(person);

const obj1 = new person("Babai", "Blockchain") // ___* Here is person is a constructor. By constructor we can create so many objects as we wish ___* //

console.log(obj1, typeof obj1); // ___* Here obj1 is an object  ___* //