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