
(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);
})();

(() => {
    console.log(`Hi`);
})();

((name) => {
    // unnamed IIFE
    console.log(`I am ${name}`);
})('DR.DOOM')