// this inside the function

function chai() {
    // the value dependent on strict / non-strict mode
    //  "use strict"
    console.log(`Inside chai func ${this}`);
}
/**
 * In non-strict mode the value of this is global object (depent on run time environment which global object) and in strict mode the value of this is undefined.
 * this inside non-strict mode - (this substitution)
 * What is this substitution ?
 * this substitution means that whenever the value of this keyword is undefined or null then it becomes the global object (again global object depends on runtime environment like Nodejs, Web browser) 
 */
chai()





const obj = {
    a: 10,
    x: () => {
        console.log(this);
    }
}
//console.log(this)
//obj.x();

// this inside nested arrow function

const obj2 = {
    a: 20,
    x: function () {
        const y = () => {
            console.log(this);
        };
        y();
    }
}
//obj2.x();

let anonymous = function (username, email) {
    this.username = username
    this.email = email
    console.log(this);
}

//let user = new anonymous("Mr. Wick", "jonathan@work.com")

// this inside DOM element => reference to HTML element

