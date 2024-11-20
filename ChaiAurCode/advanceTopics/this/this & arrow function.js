

const user = {
    username: "Babayaga",
    location: "Hell",

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to the ${this.location}`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "Babai"
// user.location = "Home"
// user.welcomeMessage()

//console.log(this);

// function chai(){
//     let username = "Sapta"
//     console.log(this);              // undefined
// }
// chai()

// const chai = () => {
//     let username = "Sapta"
//     console.log(this.username);     // undefined
// }

//const addTwo = (num1, num2) => num1 + num2

const addTwo = (num1, num2) => (
    {
        username: "hitesh"
    }
)

console.log(addTwo(3, 5));