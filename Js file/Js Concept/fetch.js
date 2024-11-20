// API for get requests
// let fetchRes = fetch(
//     "https://api.github.com/users");

// fetchRes is the promise to resolve
// it by using.then() method

// fetchRes.then(responce =>
//     responce.json()).then(data => {
//         console.log(data)
//     })

const fetchPromise = fetch('./Users_data.json');

function fun() {
    console.log("before");
    fetchPromise.then(responce => responce.json())
        .then((data) => {
            console.log(data);
            for (var x in data) {

                var a = `${data[x].login} - ${data[x].node_id} - ${data[x].avatar_url}<br>`;
                document.write(a);
            }
        })
        .catch(error => console.log("Can't fetch the API, Something went wrong : ", error))
    console.log("after");

}

fun();

