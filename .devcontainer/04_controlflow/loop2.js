// loops -- ab jo bhi loop aayenge vo array and objects specific h
//for...of works on iterables

// for...of works on iterables
// An iterable is an object that has a special method called Symbol.iterator
// ["", "", ""]
// [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);
// } // here in for of loop num likhte hi value print ho gyi

// const greetings = "Hello world!"
// for (const greet of greetings) {
//     //console.log(`Each char is ${greet}`)
// } // sare characters print ho jayenge

// Map - it is an object that hold key value pairs and print in original insertion order and duplication of key and values pairs are not occur 

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
//map.set('IN', "Ina") // if i write this then value of IN is replace by india
//  console.log(map);
// for(const key of map)
// {
//     console.log(key)
// } //answer --> [ 'IN', 'India' ]
// [ 'USA', 'United States of America' ]
// [ 'Fr', 'France' ]

// for (const [key, value] of map) {
//      console.log(key, ":-" , value);
// }

//for of loop on object 
// const myObject = { // -> here myobject is not iteratable
//     game1: 'NFS',
//     game2: 'Spiderman'
// }

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// } // error

// for in loop
// const myObject = {
//     js: 'javascript',
//     cpp: 'C++',
//     rb: "ruby",
//     swift: "swift by apple"
// }
// for (const key in myObject) {
//     //console.log(key);
// } // it return keys

// for (const key in myObject) {
//     //console.log(myObject[key]);
// } // it return objects

// for (const key in myObject) {
//     //console.log(`${key} shortcut is for ${myObject[key]}`);
// }
 // for in loop for arrays
//const programming = ["js", "rb", "py", "java", "cpp"]
//in for-in loops in array print only keys if we right num
// for (const num in programming) {
//     //console.log(num)
//     console.log(programming[num]);
// }


// map is not iteratable in case of for in loop. doesnt work on this
//for...in works on object properties (keys)
//A Map does not store its data as normal object properties
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
//} // ab loop nhi chlega 


// for each loop --ye loop ka parameter h to ise bydefault inject kr rkha h arrays me
const coding = ["js", "ruby", "java", "python", "cpp"]

//coding.forEach(callbackfunction) --> callback function is just a function given to do work on that
// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }
 // coding.forEach(printMe)

// // coding.forEach( (item, index, arr)=> {
// //     console.log(item, index, arr);
// // } )

// const myCoding = [
//     {
//         languageName: "javascript",
//         languageFileName: "js"
//     },
//     {
//         languageName: "java",
//         languageFileName: "java"
//     },
//     {
//         languageName: "python",
//         languageFileName: "py"
//     },
// ]

// myCoding.forEach( (item) => {
    
//     console.log(item.languageName);
// } )

