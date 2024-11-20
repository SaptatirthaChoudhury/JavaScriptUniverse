const promiseOne = new Promise(function (reslove, reject) {
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function () {
        console.log('Async task is completed');
        reslove()
    }, 1000)

})

promiseOne.then(function () {
    console.log("Promise consumed");
})

new Promise((reslove, reject) => {
    setTimeout(() => {
        console.log("Async task 2");
        reslove()
    }, 3000)
}).then(() => {
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function (reslove, reject) {
    setTimeout(function () {
        reslove({
            username: "Chai",
            email: "chai@chaiaurcode.com"
        })
    }, 5000)
})

promiseThree.then(function (user) {
    console.log(user);
})

const promiseFour = new Promise((reslove, reject) => {
    setTimeout(() => {
        let error = false
        if (!error) {
            reslove({ character: "DR.Doom", message: "You are going to be doomed, haha ..." })
        } else {
            reject("You are not going to be doomed! What the hell!")
        }
    }, 6000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.character
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("The promise is either resolved or rejected");
})

// const promiseFive = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let err = true
//         if (!err) {
//             resolve({
//                 username: "JavaScript",
//                 password: "009"
//             })
//         } else {
//             reject('ERROR: JS went wrong')
//         }
//     }, 8000)
// })

// async function consumePromiseFive() {
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }
// consumePromiseFive()

// async function getAllUsers() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);

// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })