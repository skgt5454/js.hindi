// const user = "saksham"

// if(user) // idhar maan liya gya h user true h to ye chl rha h kyuki user ke andar kuch likha hua h . agr vo empty string hoti to false maaan leti , agr vo empty array hota to vo true hota
// {
//     console.log("got user email")
// }
// else{
//     console.log("bhdsgyb")
// }

// falsy values - false , 0,-0,BigInt me jo 0n ,null,undefined,nan,""
// inke alawa sare h wo truthy values - "0",'false',[],{}," ", function(){} - empty function
// const user = []
//  // hmm array ko aise check krenge
// if(user.length ===0) {
//     console.log("got user email")
// }
// else{
//     console.log("bhdsgyb")
// }

const user = {}
 // hmm object ko aise check krenge -> uske keys ko array me leke
if(Object.keys(user).length ===0) {
    console.log("got user email")
}
else{
    console.log("bhdsgyb")
}
 // false == 0 ,false = "",0 == ""  ==> true


 // nullish coalescing operator(??) => it is for null and undefined
 //let val1 = 5??10 // 5
  //let val1 = null??10 // 10
  //let val1 = undefined??10 //10
 //console.log(val1) // ye ?? null aur undefined ke liye use kiya  jb hum kbhi database ya firebase ko call krenge to hme kya h directly response nhi milta h kuch fucnction type me cheez milti hai the agr wo function kuch value return kr di to vo null??value value aa jayega aise hi undefined me hoga
 // ?? isko hum true??10 aise bhi likh skte h mtlb agr ?? iske right side koi value nhi return kri function ne to true print ho jaega
 let 
 val2 = null??10??15
  console.log(val2) // 10 // jo value null ke baad milli vhi ans hogi

// ternary operator
condition ? true : false








