function Product(name, price) {
  this.name = name;
  this.price = price;
  console.log(this);
}

function Food(name, price) {
  this.category = "food";
  Product.call(this, name, price);
}

let butterChicken = new Food("Butter Chicken", 170);


// Creating a new user object
let user = {};

/**
 * If you can't get this concept then go to this link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
 *
 */

function greet() {
  console.log(this.animal, "typically sleep between", this.sleepDuration);
}

const obj = {
  animal: "cats",
  sleepDuration: "12 and 16 hours",
};

//greet.call(obj); // cats typically sleep between 12 and 16 hours
