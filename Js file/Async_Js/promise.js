function babai() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            value = false;
            if (value) {
                resolve("Promise fulfilled")
            } else {
                reject("Promise not fulfilled");
            }

        }, 3000)
    })
}

const promise = babai();
console.log(promise);

function fulfilled(arg1) {
    console.log("Babai has fulfilled his promise , status : " + arg1);
}
function Notfulfilled(arg2) {
    console.log("Babai has failed to fulfilled his promise, status : " + arg2);
}

promise.then(fulfilled).catch(Notfulfilled);


