let again = "yes";
while (again == "yes") {
    let age = prompt("what is your age:");

    age = Number.parseInt(age);

    function canDrive(age) {
        return age >= 18 ? true : false;
    }

    if (canDrive(age)) {
        console.log("You can drive");
    }
    else {
        console.log("You can't drive");
    }

  }
  


