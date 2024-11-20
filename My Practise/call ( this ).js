
function loginCredentials(userId, password) {
    this.userId = userId
    this.password = password
}

function signIn(userId, username, password) {
    loginCredentials.call(this, userId, password)
    this.username = username

}

const saapto = new signIn("sap21", "saapto", "passcode90")

console.log(saapto);

/** 
console.log(saapto.__proto__.constructor.prototype.__proto__);

console.log(signIn.prototype.constructor.prototype.__proto__);

*/



