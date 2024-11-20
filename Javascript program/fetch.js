// API for get requests
// let fetchRes = fetch(
//     "https://api.github.com/users");

// fetchRes is the promise to resolve
// it by using.then() method

// fetchRes.then(responce =>
//     responce.json()).then(data => {
//         console.log(data)
//     })

const fetchPromise = fetch('https://api.github.com/users');

function fun() {
    console.log("before");
    fetchPromise.then(responce => responce.json())
        .then((data) => {
            console.log(data);
            for (var x in data) {
                console.log(data[x]);
            }
        })
        .catch(error => console.log("Here is error messages : ", error))
    console.log("after");

}

fun();

