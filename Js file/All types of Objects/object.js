class person {
    constructor(name, department) {
        this.name = name;
        this.department = department;

        console.log("My name is" + " " + this.name + " " + "and my department is" + " " + this.department);

    }
}
const obj1 = new person("Sapta","Web development")

const obj2 = new person("Mohor", "Machine learning")


function person(name,department){
    this.name = "Babai",
    this.department = "Machine learning"
}
const obj1 = new person();
console.log(obj1);

class Coder {
    constructor(lang1, lang2) {
        this.lang1 = lang1,
            this.lang2 = lang2

    }

}

const obj1 = new Coder("CPP", "JavaScript");
console.log(obj1,typeof obj1);

const obj2 =  new Coder(); // we didn't pass the argument
console.log(obj2,typeof obj2);
















