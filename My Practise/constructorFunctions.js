function Privacy() {
  this.name = "Saapto";
  this.SSN = 627;
}

let data = new Privacy();
console.log(data);

Privacy.prototype.info = function () {
  console.log(
    `Citizen name ${this.name} of social security number ${this.SSN}`
  );
};

Privacy.prototype.nickNames = ["Babai", "Mohor"];
data.__proto__.value = 231;

//Privacy.prototype.info.prototype = "info";
