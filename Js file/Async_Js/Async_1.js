console.log("Start of the execution");

async function Babai() {
    console.log("Inside the babai function");

    const responce = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("data");
        }, 6000)
    })
    console.log("Wait finished");
   

    return responce;

}

console.log("Before calling the babai function");

const variable = Babai();

console.log("After calling the babai function");

console.log(variable);

console.log("End of the execution");
