//your code goes here
//homogeneous array

// let cities = ["mumbai", "delhi", "banglore"];
// console.log(cities[0]);
// cities[0] = "pune";
// console.log(cities);
//heterogeneous array
// let heteroExample = [1, "abc", true, '56'];
// console.log(heteroExample);

// // let multidimensionalArray = [
// //   ["Sapta", 22, "student"],
// //   ["Ajay", 24, "working"],
// //   ["Nikhil", 14, "student"],
// //   ["Brijesh", 14, "student"]
// // ]

// // console.log(multidimensionalArray);
// // console.log(multidimensionalArray[1]);
// // console.log(multidimensionalArray[1][2]);

// // let multiArr = [
// //   [
// //     ["xyz", 1, 100],
// //    	["abc"]
// //   ],
// //   ["gopal", 25]
// // ];

// // console.log(multiArr[0]);
// // console.log(multiArr[0][0]);
// // console.log(multiArr[0][0][1]);
// // console.log(multiArr[1][0]);


// // A -> [0][0][1]
// // B -> [0][1]
// // c -> [0][1][2]
// // D -> none of them


// // let jaggedArr = [
// //   ["abc" , 1, 100],
// // 	["xyz"]
// //  ];
// // console.log(jaggedArr[1]);
// // console.log(jaggedArr[1][0]);
// let str = "ajay raheja"; 
// let str1 = 'Aayush';
// let str2 = new String ("Gopal's phone");
// let str3 = "Gopal's phone";
// let str4 = `my name is ${str1} `; 
// let str5 = `my name is ${str} `; //template string
// console.log(str);
// console.log(str1);
// console.log(str2,);
// console.log(str3);
// console.log(str4);
// console.log(str5);

// //string is immutable
// console.log(str[1]); // ecmascript 5
// str[1] = 'm';
// console.log(str[1]);
// console.log(str.charAt(1));

// if(str > str1){
//   console.log(str);
// }

// let st1 = "AbC";
// let st2 = "ab c";
// if(st1.toUpperCase() == st2.toUpperCase()){
//   console.log("both are equal");
// }
// else{
//   console.log("both are not equal");
// }


// let str5 = "abc"; // primitive 
// let str6 = new String("def"); //object

// console.log(typeof str5);
// console.log(typeof str6);

// let str7 = "3 + 7";
// let str8 = new String( "'3' + '7'");
// console.log(str7);
// console.log(eval(str7));
// console.log(str8);
// console.log(eval(str8));
// console.log(eval(str8.valueOf()));




let person = {
  "name" : "Parag",
  "age": 24,
  "siblings": ["pooja", "rohan"],
  "student": true, 
}
let person2 = {
  "name" : "Lalit",
  "age": 25,
  "siblings": ["ajay"],
  "student": false, 
}
let arr = {
  1 : "Lalit",
  true : 25,
}
console.log(person);
console.log(person2);
console.log(arr);


// function person(name, age, siblings, student) {
//   this.name = name;
//   this.age= age;
//   this.siblings= siblings;
//   this.student= student;
// }

// let person1 = new person("lakshmi", 23, ["rohan"], true);
// // person1.name = "lakshmi";
// // person1.age = 23;
// console.log(person1);
// person1.name = "arnav";
// console.log(person1);


















