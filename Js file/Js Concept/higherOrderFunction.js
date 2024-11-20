function func(anonymous, doom) {
    anonymous()
    doom();
}



func(() => {
    console.log("I am Anonymous function");

}, () => {
    console.log("I am Dr.Doom");
})  