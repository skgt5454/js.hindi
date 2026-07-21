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




