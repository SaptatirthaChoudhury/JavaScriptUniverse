// returning the position where we found the key *********//

function LinearSearch(arr, key) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == key) {
            return i;
        }
    }
}
// storing the position and returning where we found the key******//

function GlobalLinearSearch(arr, key)
{
    let result = [];
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i] == key)
        {
            result.push(i);
        }

    }
    return result;
}
let arr = [5, 74, 2, 32, 4, 21, 4];
let key = 4;
let position = LinearSearch(arr, key);
console.log(position);
let allposition = GlobalLinearSearch(arr, key);
console.log(allposition);
