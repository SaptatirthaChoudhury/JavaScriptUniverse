
function calculateCartPrice(...num1) {
    return num1
}

console.log(calculateCartPrice(200, 300, 400, 500));

function calculateCartPrice(val1, val2, ...num1) {
    return {
        val1,
        val2,
        num1
    }
}
console.log(calculateCartPrice(200, 300, 400, 500));

const protagonist = {
    username: "John Wick",
    knownAs: "Baba yaga"
}

function handleObject(anyobject) {

    console.log(`Character is ${anyobject.username} and also known as ${anyobject.knownAs}`);
}

handleObject(protagonist)

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[0]
}
console.log(returnSecondValue(myNewArray));