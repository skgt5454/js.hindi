// const name ="saksham "
// const repoCount = 50
// console.log(name+repoCount+" value")
// perfect way 
// console.log(`my name is ${name} and my github repocount is ${repoCount}`)  --> my name is saksham  and my github repocount is 50
// dhyan rkhe is new way me hme backticks lgane pdenge inverted commas ki jagah

// other method to declare the string 
const gameName = new String('hiteshhc')
console.log(gameName[0]) // return
console.log(gameName.__proto__) //ye return krega {} means object
// jb hum const wali line console pr chalaenge to hme dikhega string print hogi and uske sare characters print ho jaenge and length method hoga aur kafi sare methods honge prototypes ke andar.
// jbhi hme string ka 
// console.log(gameName.toUpperCase()) --> HITESHCC
//console.log(typeof String) --> ye ek function object hai
console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))