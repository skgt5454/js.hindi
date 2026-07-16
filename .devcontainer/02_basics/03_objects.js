// objects declare by two methods literal and constructor
// singleton -- means jb bhi contructor se koi object bnta h to wo hota singleton object

// literal - method to declare object
// const jsUser = {
//     name : "Hitesh",
//     age :18,
//      "naam" : "kk" // is case me jrur square bracket wala use krna h
//     location : "jaipur",
//     email : "sakshamg086@gmail.com",
//     isloggedin :"false"
// }
// method to extract object
// console.log(jsUser.email)  //but not a right way -- but sbse jyada yhi use krna h square bracket wala tb use krna h name ,email vagera string me likhe ho 
// console.log(jsUser["email"]) // right way // ye baat dhyan rkhna object ke andar jo ye de rhe h name,email.. ye sb strings ki tarah maane jate h
// console.log(jsUser["age"]) --> 18

// method to declare symbol
const mysym = Symbol("key1")
const jsUser = {
    name : "Hitesh",
    [mysym] : "mykey1",  // method to give symbol as a key in object
    //mysym : "key1", // act as a string not an symbol
    age :18,
    location : "jaipur",
    email : "sakshamg086@gmail.com",
    isloggedin :"false"
}
// age , name ,email .. are the properties in jsUser
//method to print symbol from object

// console.log(jsUser["mysym"]) //-->undefined
// console.log(jsUser[mysym])  // -->mykey1  symbol hmesha square bracket se excess kiya jaata h

//change the values of objects
// jsUser.email = "sakshamhj@google.com"

// to freeze the value - means value cannot be altered if change after freeze
// Object.freeze(jsUser)
 //define the functions
  jsUser.greeting = function()
 {
    console.log('hello js user')
 }
 console.log(jsUser.greeting) //-->[Function (anonymous)] -- function execute nhi hua h sirf function ka refernce aaya h
 console.log(jsUser.greeting()) //--> hello js user
 jsUser.greetingtwo = function()
 {
    console.log(`hello js user , ${this.name} of age ${this.age}`) // ye this alg alg type se kaam krta h to iske baare me baad me pdhenge
 }
 console.log(jsUser.greetingtwo()) //-->hello js user , Hitesh of age 18
 // niche terminal me baar baar undefined dikh rha h aise hi browser me ek undefined dikhta h baar baar uska mtlb baad me pdheneg



