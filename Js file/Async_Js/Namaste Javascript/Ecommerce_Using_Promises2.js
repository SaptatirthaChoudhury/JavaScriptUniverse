const cart = ["shoes", "pants", "kurta"];

const promise = createOrder(cart);

// Async promises :

// 1. createOrder
// 2. proceedToPayment
// 3. showOrderSummary
// 4. updateWallet

promise.then((orderId) => {
    console.log("Order ID :" + orderId);
    return orderId;
})
    .then((orderId) => {
        return proceedToPayment(orderId);
    })
    .then((paymentId) => {
        console.log("Payment successful,  Payment ID :" + paymentId);
        return showOrderSummary(paymentId);
    })
    .then((showOrder) => {
        console.log(showOrder);
        return updateWallet();
    })
    .then((walletInfo) => {
        console.log("Your wallet balance : " + walletInfo);

    })
    .catch((err) => {
        console.log(err.message);
    })



function createOrder(cart) {
    const mypromise = new Promise((resolve, reject) => {

        if (!ValidateCart(cart)) {
            const err = new Error("Card is not valid");
            reject(err);
        }
        // logic for orderId
        const orderId = "K00023456777MN";
        if (orderId) {
            setTimeout(() => {
                resolve(orderId);
            }, 3000);
        }

    })

    return mypromise;
}

function proceedToPayment(orderId) {
    return new Promise((resolve, reject) => {
        const paymentId = "PAY900000KL";
        setTimeout(() => {
            resolve(paymentId);
        }, 5000);

    });
}

function showOrderSummary(paymentId) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve("Items : shoes and kurta. So total Rupees : 3400 INR");
        }, 7000);
    });
}

function updateWallet() {
    return new Promise((resolve, reject) => {
        const wallet = "55000 INR";
        setTimeout(() => {
            resolve(wallet);
        }, 9000)
    });
}

function ValidateCart(cart) {
    return true;
}