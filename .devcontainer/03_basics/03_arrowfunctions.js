// const user = {
//     username : "saksham",
//     price : 99,
//     welmess : function()
//     {
//         console.log(`${this.username}, welcome the guest`)
//         console.log(this) // ye current context ki baat krta h saari values vagera deta h
//     }
// }
//user.welmess()
//saksham, welcome the guest
// { username: 'saksham', price: 99, welmess: [Function: welmess] }

// user.username = "jay" // idhar hmne context change kr dia mtlb uski value
// user.welmess()
//jay, welcome the guest
//{ username: 'jay', price: 99, welmess: [Function: welmess] }

// agr me console.log(this) user ke bahr likhta to {} ye aata means empty object kyuki abhi global ke andar koi context hi nhi h to empty object de rha h
// but jb inspect me run krenge then return hoga windows kyuki browser ke andar jo global object h wo h window object
// function chai()
// {
//     let username = "sak"
//     // console.log(this.username) // undefined means ye context only objects pr kaam kr rha h functions pe nhi
//     //console.log(username)
//     console.log(this)
// }
// chai()
// ab iske andar bhutsari cheeze print ho jayegi kyuki this function ke andar hai

/// arrow functions
 let username = "saksham"
const chai = () =>{
    
    console.log(this.username)
}
chai()
// is baar this  function ke bahr print krwao ya andar aaega ye {} 

// here addtwo is a variable in which  stored in the function
// explicit return
// const addtwo = (num1,num2) => {
//     return num1 + num2
//}
 //console.log(addtwo()) // nan
//console.log(addtwo(2,4)) // 6

//other way to write the function 
// this was the implicit return 
// const addtwo = (num1,num2) => num1+num2  // if agr curly braces use kiye to return keyword likhna hi pdega
// const addtwo = (num1,num2) => (num1+num2) // lekin agr parenthesis likhe ya na likhe to return kewyword nhi likhna pdega

// const dectwo = (num1,num2) =>({username : "saksham"}) // agr object return krwana go to parenthesis me then curly to aaega hi
// console.log(dectwo()) 