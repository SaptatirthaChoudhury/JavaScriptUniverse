const tinderUser = {}

tinderUser._id = "jsgdshjvfhjdvf"
tinderUser.name = "Babai"
tinderUser.isLoggedIN = false
tinderUser.arr1 = new Array()
tinderUser.arr2 = ["str", 21, true]
tinderUser.place = ""

function tinder() {
    // if (tinderUser?.isLoggedIN) return false
    // else return true

    // if (tinderUser?.arr2.includes(21)) return true
    // else return false

    if (tinderUser?.place.trim() === "") return true
    else return false
}
console.log(tinder());