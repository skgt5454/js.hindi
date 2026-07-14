//arrays -  const heroes = ["shaktiman","naagraj"]
//  console.log(typeof heroes)  - object 

//objects - let myobj = {name : "sak",age:22}
// so idhar jo bhi myobj me likha h wo object hai
// console.log(typeof myobj) - object

// function
// const myFunction = function(){console.log("hello world");}
// console.log(typeof myFunction) - function return krega but isko bola jaata hai object function
// sare non primitive datatypes return krte hai object

// const bigInt = 58446151864168416n
// console.log(typeof bigInt) -->> bigint

/// memory has two types = stack and heap
// in primitive stack is used and in non primitive heap is used


// let myyt = "saksham"
// let anmyyt = myyt
// anmyyt = "raja"
// console.log(myyt) - saksham
// console.log(anmyyt) - raja

// in primitive datatypes there is call by value so original value of myyt not change 

let userone = {
    name :"saksh",
    age : 15
}
console.log(userone.name) // ye method h . lgake kisi bhi cheez ka name de do uska value pta lgane ke liye
