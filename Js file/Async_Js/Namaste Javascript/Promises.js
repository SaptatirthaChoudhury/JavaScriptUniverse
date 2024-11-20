

let myPromise = new Promise(function (myResolve, myReject) {
    let x = 0;

    // some code (try to change x to 5)

    if (x == 0) {
        myResolve("OK");
    } else {
        myReject("Error");
    }
});

//   myPromise.then(
//     function(value) {console.log(value);},
//     function(error) {console.log(error);}
//   );

myPromise.then((value) => {
    console.log(value);
}).catch((error) => {
    console.log(error);
})