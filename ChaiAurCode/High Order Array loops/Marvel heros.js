
const marvelHeroes = ["Iron man", "Dr. Strange", "Thor", "Captain America", "Sangchi", "Wolverin", "Deadpool"]

for (const char of marvelHeroes) {
    console.log(char);
}


// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States Of America")
map.set('Fr', "France")

 //console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}
