
// One of the way of creating callback function ********************* //

// function X(){
//     console.log("X func called");
// }
// function Y(called){
// called();
// }
//Y(X);  // here X is callback function passing as a argument inside Y function //

// ******************************************** //

// Another way to create a callback function ********************** //

// function Y(called) {
//     called();
// }
//Y(function X() {                   // here X is callback function //
//    console.log("Callback function X called by passing as a parameter inside Y");
//})

// ************************************************ //
setTimeout(function X() {
    console.log("I would be console out after 4 seconds baby ...so keep waiting !");
}, 4000);

function Y(called) {
    called();
}
Y(function X() {                   // here X is callback function //
    console.log("Callback function X called by passing as a parameter inside Y");
})