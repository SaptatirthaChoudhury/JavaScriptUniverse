
function Car() {
    this.name = "Audi";
    this.color = "Grey"
}

//console.log(Car.prototype);

//const carObj = new Car();
//console.log(carObj.__proto__);

function Cricketer(name, age) {
    this.name = name;
    this.age = age;

}

Cricketer.prototype.team = "Indian Cricket team";
Cricketer.prototype.authority = "BCCI"

const virat = new Cricketer("Virat", 34);
const jadeja = new Cricketer("jadeja", 31);
const rahul = new Cricketer("Rahul", 30);
const dhoni = new Cricketer("Dhoni", 36);


rahul.__proto__.team = "Ireland"

console.log(Cricketer.prototype);

