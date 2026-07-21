const mynew = [1,2,3,4,5,6,7,8,9];
// map is also a call back function // it return the value automatically // ye map items ko update krta h//
// const lala = mynew.map((item)=>item>5)// -->[false,true,false,false,false,true,true,true,true]
// const kala = mynew.map((item) =>item*10)//-->   [10, 20, 30, 40, 50, 60, 70, 80, 90]
// console.log(lala)
// console.group(kala)
 //chaining - 2 ya 3 methods directly lga de
 let newnums = mynew.map((item) =>{return item*10}).map((num) => num+1) // here num represent karenge us array ke elment ko jo bn gya tha pehle wale map se
console.log(newnums)//->[11,12,13,14,15,16,17,18,19]
 newnums = mynew.map((item) =>{return item*10}).map((num) => num+1).filter((act) =>act>50)
console.log(newnums)// ->[ 51, 61, 71, 81, 91 ]

// reduce
const my  = [1,2,3,4,5]
my.redu
let initialvalue = 












