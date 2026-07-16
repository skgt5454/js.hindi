const mhero = ["thor","ironman"]
const hero = ["superman","flash"]
// mhero.push(hero) ==> push existing array ko chnage krta h
// console.log(mhero) //--->[ 'thor', 'ironman', [ 'superman', 'flash' ] ]
// array aone andar kuch bhi le leta hai
// console.log(mhero[2][1]) //-->flash
const allhero = mhero.concat(hero) // concat hmesha ek new array deta hai
// console.log(allhero) 
/// hmm concat ki jagah spread operator use krenge
const nehero = [...mhero, ...hero] // spread operator isliye uskrenge kyuki yha pr multiply array combine ho skte hai
//console.log(nehero)//[ 'thor', 'ironman', 'superman', 'flash' ]
const array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_anotherarray = array.flat(Infinity) //--> ye flat sare elements return krdeta each subarray ke hme idhar depth deni hoti h idhar hmne infinity di h to pura hi kr dega
const realarray = array.flat() // default depth is 1 so only andar ke 1 nested array walo ko khol dega
console.log(realarray)
// console.log(real_anotherarray) -->[
//   1, 2, 3, 4, 5,
//   6, 7, 6, 7, 4,
//   5
// ]    

console.log(Array.isArray("hitesh")) //-- >false
console.log(Array.from("hitesh")) // [ 'h', 'i', 't', 'e', 's', 'h' ]

console.log(Array.from({name:"hitesh"})) // important for interview  isko directly ye array me convert nhi kr paaaega kyuki hme dena pdega ki key ko krna h ya value ko so return krega []

let s1 = 100
let s2 = 200
let s3 = 300
console.log(Array.of(s1,s2,s3))  // -> ye ek new array bna deta h different sets ke elements se










