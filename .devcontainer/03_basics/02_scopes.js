//scope is the {}
//  if(true) 
//  {
//     // let a = 10
//     // const b = 20
//        var c = 30
//  }
// ab agr console.log se a ,b ,c print krwaenge to error aaega 
// lekin error ye bss let const ki vjah se aaega unko comment out krke sirf c print krwaenge to print ho jaega kyuki vo var hai
// var ke case me yhi dikkat h to hum var use nhi lete
// age me var na bhi lgau or only c likhu to bhi print ho jaaega 
//console.log(c) //==> 30
// var f = 400 
// // this is global scope ==> bahr jo likhenege vo global scope yeh baat dhyan rkhna jo bhi global scope me likheneg to vo value block scope me hoga but jo block scope me jo value hogi vo bahr nhi jaani chahiye
// if(true) // this type of scope is block scope
//  {
//     let d= 10
//     const e = 20
//     var f = 30 // idhar  var likho chahe ya nhi lekin print to bahr waala hi hoga in case of var 
//  }
// console.log(f)  //-->30
// // ab ye dikkat aur h if ke bahr wala print nhi ho rha h andar wala ho rha h in case of var
// // in case of let bahr vali value print hoti h

//  let g = 400
// if(true) // this type of scope is block scope
//  {
//     let g= 10
//     const h = 20
//     console.log("inner value of g:",g)
//  }
// console.log("outer value of g:",g)
//  //answers==>>
// // inner value of g: 10
// // outer value of g: 400
 

// // global scope jo hum inspect me check krte h aur jo js me node se run krwa rhe h both are different
//  // nested scope
//   function one()
//   {
//       const username = "saksham"
//         function two()
//         {
//          const website = "hhuhu:njb.com"
//          console.log(username) //  andar wala bahr wale se mang rha h// chota baccha bade aadmi se icecream maang skta h
//         }

//         //console.log(website)  // ye baat dhyan rkhna andar wala function bahr wale function se uski cheeze le skta h but yha bahr wala andar wale se mang rha h 
//         two()
//   }
//   one()

  // aise hi if ke blockscope me hota h
  if(true)
  {
   const username = "saksham"
   if(username === "saksham")
   {
       const app = "yt"
       console.log(username+app) // = sakshamyt
   }
  }

  //++++++++++++++++++++++ interesting+++++++++++++++//

  function add1(num) //  functions
  {
   return num+1
  }

  add1(50)

  const add2 = function(num) // ye bhi function h but ise kbhi kbhi expressions bhi bol diya jaata h. here add2 is a variable because variable can hold anything in js
  {
   return num+2
  }
  add2(50)
  
  // these are two methods of declaring function

//age me 1st function se upar console.log(add1(50)) likhu to ans 51 aa jayega
// agr mr 2nd function ke upar console.log(add2(50)) likhu to error aa jayega kyuki isme function variable me likha h

// aage jake concept aayega hoisting jisme hota h ki function kaise declare hote h kha unhe rkha jaata h kya unka execution kaise variable treat krti h js
