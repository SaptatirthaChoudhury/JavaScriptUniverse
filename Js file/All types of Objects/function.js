// let person = {
//     name: "mohor",
//     age: 23,
//     gender: "male",
//     speak: function () {
//         console.log("i am speaking");
//     },
//     sleep: function () {
//         console.log("i am sleeping");
//     },
//     eat: function () {
//         console.log("i am eating");
//     }
// }
// console.log(person.name);
// console.log(person["age"]);
// person["sleep"]();
// console.log(person["eat"]);
// person["eat"]();

// console.log(Object.keys(person));
// for (key in person) {
//     console.log(key);
// }

// console.log(Object.values(person));
// for(key in person)
// {
//     console.log(key,person[key]);
// }

// creating object with new keyword *********************** //

// const person1 = new Object();
// console.log(person1);
// person1.name = "sapta";
// person1.age = 23;
// person1.sport = function()
// {
//     console.log("i love cricket");
// }
// //console.log(person1);
// //person1.sport();
// let person3 = person1;
// console.log(person3);
// person3.sport();
//**************** */ user defined function***********************//
// function makeObject(name)
// {
//     let str = "my name i " + name;
//     return str;
// }
// console.log(makeObject("mohor"));

//******************************************* */

// function makeObject(name, age) {
//     return {
//         name:name,
//         age:age
//     }
// }
// let object1 = makeObject("babai", 23);
// console.log(object1);
//********************************************* */

// class makeObject {
//     constructor(name, age) {
//         this.name = name,
//             this.age = age;
//     }
// }
// let babai = new makeObject("babai", 23);
// let mohor = new makeObject("mohor", 24);
// console.log(babai);
// console.log(mohor);
//************************************************* */

// function boysSchoolStudent(name, age) {
//     this.name = name,
//         this.age = 23

// }
// boysSchoolStudent.prototype.gender = "male";
// boysSchoolStudent.prototype.address = "silchar";

// let sapta = new boysSchoolStudent("sapta", 23, "male");
// console.log(sapta.gender, sapta.address);
// let mohor = new boysSchoolStudent("mohor", 24, "male");
// console.log(mohor.gender, mohor.address);
// console.log(Object.getPrototypeOf(mohor));

//***************************************************** */
// let person = {
//     name: "Sapta_Thirta_Choudhury",
//     age: 24,
//     sibling: ["moon","mudra"],
//     marks: {
//         Digital_logic: 83,
//         Programming_with_C: 76
//     },
//     game: function(){
//         console.log("I play CallOfDuty_ModernWarfare");
//     }
// }
// let obj1 = Object.create(person);
// //console.log("I am " +obj1.name);
// console.log("obj1 : "+obj1.name);

// let obj2 = Object.create(person);
// obj2.name = "Babai_Choudhury";
// console.log("obj2 : "+obj2.name);

// const p1 = obj1;
// //console.log(p1.game(),p1.marks);
// let p2 = p1;
// console.log("p2 : "+p2.game());
//************************************************** */
















