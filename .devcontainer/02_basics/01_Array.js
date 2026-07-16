//JavaScript arrays are resizable , contain a mix of different data types,array elemnts are excessed by their indexes
// JavaScript array-copy operations create shallow copies,shallow copies--> whose share the same reference point,deep copies--> whose doesn't share the same reference
const myarr = [0,1,8,6,2]
// another way to declare array
const arr2 = ["skhh","dhhb"]
// arrays ke andar bhi hme ek property milti h length and prototype milta h inspect me
// console.log(arr2[0])
console.log(myarr)
// ARRAY METHODS

arr2.push(6) //  use to add values in array
arr2.pop() // remove last value
arr2.unshift(9) // isme arr2 ke shuru me 9 lga dega aur pura array 1 se shift ho jaayega
arr2.shift() // ye first wale element ko delete kr dega

console.log(arr2.includes(9)) //==> false
console.log(arr2.indexOf(19)) //---> here index 19 not present so return -1

console.log(typeof arr2) // object

const marr = arr2.join()
console.log(arr2) //---> [ 'skhh', 'dhhb' ]  ye h array
console.log(marr) //-->skhh,dhhb  --> ye h string

//yha tk dhyan rkhe original array change ho rhe h

// slice return copy of section of array
// splice main array me se woh portion delete kr deta h jo hme chahiye tha


console.log('A',arr2)
const mya1 = arr2.slice(1,4)
console.log(mya1)
console.log('B',arr2)
const mya2 = arr2.splice(1,4)
console.log(mya2)
console.log('C',arr2)
//answers 
// A [ 'skhh', 'dhhb' ]
// [ 'dhhb' ]
// B [ 'skhh', 'dhhb' ]
// [ 'dhhb' ]
// C [ 'skhh' ]



  


