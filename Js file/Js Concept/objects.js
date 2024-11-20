// function Laptop(make,model,cores)
// {
//     this.make = make;
//     this.model = model;
//     this.cores = cores;
// }
// const mylaptop = new Laptop('Apple', 'MacBook Pro', 16);
// console.log(mylaptop);

function PrintZero(x) {
    if (x == -1) {
        return;
    }
    console.log("before",x);

    PrintZero(x - 1);
    
    console.log("after",x);


}

PrintZero(10)
