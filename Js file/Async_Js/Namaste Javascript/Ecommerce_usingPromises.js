// Consumer_Code ________________//


const cart = ["shoes", "pants", "kurta"];

const promise = createOrder(cart);
console.log(promise);

promise.then((orderId) => {
    console.log(orderId);
    return orderId;
})
    .then((orderId) => {
       return proceedToPayment(orderId);

    })
    .then((PaymentInfo) => {
        console.log(PaymentInfo);
    })
    .catch((err) => {
        console.log(err.message);
    })

// Producer_Code_______________________________ //

function createOrder(cart) {
    const mypromise = new Promise((resolve, reject) => {

        // createOrder
        //  validateCart
        //   orderId

        if (!ValidateCart(cart)) {
            const err = new Error("Cart is not valid");

            reject(err)
        }
        // logic for createOrder
        const orderId = "12345";
        if (orderId) {
            setTimeout(() => {
                resolve(orderId)
            }, 5000);
        }
    })

    return mypromise;
}

function proceedToPayment(orderId) {
    return new Promise((resolve, reject) => {
        resolve("Payment Succesful")
    })
}

function ValidateCart(cart) {
    return true;
}
