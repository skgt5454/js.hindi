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

//reduce method

 const mynum = [1,2,3]
// const ex = mynum.reduce(function(accumulator,currentvalue)
// {
//     console.log(`acc is ${accumulator} and currvalue is ${currentvalue}`)
//     return accumulator + currentvalue
// },0) // reduce ek aisa method h jisme ek initial value hoti h jise hum function ke sath comma lga ke likhte h to hota kya h sbse pehle accumulator ko initialvalue assign hoti h jo ki isme 0 di hai then isme pehle currentvalue 1 h to jo bhi add krne pr aayega wo accumulator ko assign ho jayega phir dusri cuurentvalue =2 use hogi then aise krte rheneg
// console.log(ex)
// acc is 0 and currvalue is 1
// acc is 1 and currvalue is 2
// acc is 3 and currvalue is 3
// 6
// const myt = mynum.reduce((acc,curr) =>acc+curr,0)
// console.log(myt)

const shoppingcart = [
{
    itemname:'js',
    price:1999
},
{
    itemname:'s',
    price:1999
},
{
    itemname:'j',
    price:1999
},
{
    itemname:'jst',
    price:1999
},
]
const totalbill = shoppingcart.reduce((acc,item) =>acc + item.price ,0)
console.log(totalbill);




