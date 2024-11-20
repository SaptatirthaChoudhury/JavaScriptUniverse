
function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn
    this.greet = function () {
        return `Hello ${this.username}`
    }

    // console.log(this === global && this === globalThis);
    // console.log(this);
    return this
}

const user1 = new User("Mohor", 4, false)
const user2 = new User("Saapto", 21, true)

//console.log(user2);
//console.log(user1.__proto__.constructor.prototype.constructor.prototype);
//console.log(User);

//console.log(user1);

function createUser(username, score) {
    this.username = username
    this.score = score

}

createUser.prototype.increment = function () {
    this.score++
}

const mohor = new createUser("Mohor", "200")
mohor.increment()



