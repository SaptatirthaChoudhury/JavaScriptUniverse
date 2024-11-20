function person(name = "fox", id = 2, course = "commerce", games = "soccer") {
    this.name = name;
    this.id = id;
    this.course = course;
    this.games = games;
}
//console.log(person)

let person1 = new person("babai", 101, "computer_science", ["cricket", "soccer"]);
console.log(person1);
let person2 = new person();
console.log(person2);
person2.name = "Sapta";
console.log(person2);