const myMap = new Map();

myMap.set("Nathan", "555-0182");
myMap.set("Jane", "315-0322");
myMap.set("mohor", "213-0322");
myMap.set("babai", "600-0322");
myMap.set("bubai", "456-0322");

for (let [key, value] of myMap) {
  console.log(`${key} = ${value}`);
}