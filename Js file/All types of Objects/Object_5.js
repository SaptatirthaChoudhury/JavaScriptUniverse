//___* Using the ‘new’ keyword with’ in-built Object constructor function___* //

const person_object = new Object();

person_object.name = "Sapta_Thirta_Choudhury"
person_object.skill = new Array('Blockchain_developer', 'Backend_developer');

console.log(person_object.skill[1]);

//___*You might have figured that this method is a bit longer to type. Also, this practice is not recommended as there is a scope resolution that happens behind the scenes to find if the constructor function is built-in or user-defined.___*//