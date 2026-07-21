// const map = new Map()
// map.set("in" , "india")
// map.set("usa" , "united states of america")
// map.set("in" , "indo") 
// for(const key in map) {
//    console.log(key)
// } // ye kuch print nhi krega for-in loops map pr kaam nhi krega

// for each loop
// const coding = ["js", "ruby","java","c","python"]// kya hota h kuch loop arrays ke andar unki properties me add kr diye jaate h
// coding.forEach( function(item){console.log(item)
// })
// answer
// ruby
// java
// c
// python
//coding.forEach((item)=>{console.log(item)}) //--> for arrow functions same result as upper



// function result(item)
// {
//    console.log(item)
// }
// coding.forEach(result)

// const coding = ["js", "ruby","java","c","python"]
// coding.forEach( function(item,index,coding)
// {console.log(item,index,coding)})
// js 0 [ 'js', 'ruby', 'java', 'c', 'python' ]
// ruby 1 [ 'js', 'ruby', 'java', 'c', 'python' ]
// java 2 [ 'js', 'ruby', 'java', 'c', 'python' ]
// c 3 [ 'js', 'ruby', 'java', 'c', 'python' ]
// python 4 [ 'js', 'ruby', 'java', 'c', 'python' ]

// this is very used in projects
// const mycode = [
//    {
//       lname:"js",
//       lfile:"javascript"
//    },
//    {
//       lname:"c",
//       lfile:"cdhdh"
//    },
//    {
//       lname:"j",
//       lfile:"java"
//    }
//    ]
//    mycode.forEach( (item)=>{console.log(item.lname );} )
// answers 
// js
// c
// j



//In the for each loop hm return nhi kr skte
// const nums = [1,2,3,4,5,6,7,8]
// const mynums = nums.filter( (num) => num>5) // isme kya hota h jo bhi number ye condition ko fulfill krta h wo return ho jata h
// console.log(mynums)

//const mynums = nums.filter( (num) => {return num>4})  // in curly braces return likhna pdta h kyuki ek scope chalu ho jaat h curly braces se
//console.log(mynums)

// const nums = [1,2,3,4,5,6,7,8]
// const newnums = []
// nums.forEach((num) =>{
//     if(num>5)
//     {
//         newnums.push(num)
//     }
// })
//  console.log(newnums)

// filter method -- > ye kisi condition ke hisab se particular subarray ko print krata h
const books = [
    {
        name : "book1" , genre : "fiction"
    },
    {
        name : "book2" , genre : "non-fiction"
    },
    {
        name : "book3" , genre : "fiction"
    },
    {
        name : "book4" , genre : "fiction"
    },
    {
        name : "book1" , genre : "non fiction"
    },
    {
        name : "book6" , genre : "adventure"
    }
];
  
let nums = books.filter((book) => book.genre === "fiction")
console.log(nums)
// so jb hum dusri baar filter method to isme nums me change nhi hua blki ek new nums print ho gya
nums = books.filter((book) =>book.genre =="adventure")
console.log(nums)

// const users = books.filter((user)=>{
//     return user.name>"book1"
// })
// console.log(users)
// [
//   { name: 'book2', genre: 'non-fiction' },
//   { name: 'book3', genre: 'fiction' },
//   { name: 'book4', genre: 'fiction' },
//   { name: 'book6', genre: 'adventure' }
// ]


















