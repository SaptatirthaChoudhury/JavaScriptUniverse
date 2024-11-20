

const user = {
    username: "hitesh",
    loginCount: 11,
    signedIn: true,

    getUserDetails: function () {
        console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

//console.log(user.username);
//console.log(user.getUserDetails());
//console.log(this);

// const globalObject = this;
// this.name = "Mohor"
// myArray = ["devil", "monster", "hell", "deomon"]
// this.myArray = myArray
// console.log(this.myArray);

function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greeting = function () {
        console.log(`Welcome ${this.username}`);
    }

    return this
}

const userOne = new User("hitesh", 12, true)
console.log(userOne.greeting());
