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
// console.log(gameName.charAt(2))  --> t
// console.log(gameName.indexOf('t')) --->2

// const nst = gameName.substring(0,4)
// console.log(nst) --> ye return krega hite
// const nt = gameName.substring(-4,4)
// console.log(nt) ---> substring negative nhi manta use 0 kr deta h then print hoga hite
// const nts = gameName.slice(0,4)
// console.log(nts)  - hite
// const http = gameName.slice(-8,4)
// console.log(http) --> slice negative index leta h print hoga hite
// trim method bot left and right side ka space remove kr deta h
// trim ke two parts h trimStart(),trimLeft() 
// trim work krta h only white space--> " ",/t and line terminators pe --> /n,/r


//  const url = "https://hitesh.com/hitesh%20chaudhary"
// console.log(url.replace('%20','-')) --> return krega https://hitesh.com/hitesh-chaudhary

// console.log(url.includes('sundar')) --> false
// if I want to change an string in to array
// const st = new String("sakshamgt-hc")
// console.log(st.split('-')) --> 'saksham','hc'

// These are two types of use of split function
// split(separator) 
// split(separator, limit)

const ts = new String("sakshamgt-hc-hg-hff")
// console.log(ts.split('-',3))  --> [ 'sakshamgt', 'hc', 'hg' ]
// jitni limit daalega utne hi elements print honge
// const yt = new String("act cat act")
// let result = [...yt.matchAll(/t/g)];
// console.log(result)  ye wala tarika iterator me jo h wo return krta h aur iterator aata h matchAll se

let str = "123";

console.log(str.padStart(5, "0"));