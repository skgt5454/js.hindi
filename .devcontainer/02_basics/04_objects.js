//contrsuctor method-singleton
const tinderUser = new Object()
console.log(tinderUser) // --> {}
 tinderUser.id = "1254hg"
 tinderUser.name = "saksham"
 tinderUser.age = 22
  // ab hum objects ke andar object demge
  const rUser = {
    email : "hcbb@gmail.com",
    fullname :{
        Userfullname:{
            firstname :"hitesh",
            lastname : "chauhh"
         }
    }
}
console.log(rUser.fullname) //-->{ Userfullname: { firstname: 'hitesh', lastname: 'chauhh' } }
console.log(rUser.fullname.Userfullname)  //-->{ firstname: 'hitesh', lastname: 'chauhh' }
 const ob1 = {1:'a',2:'b'}
 const ob2 = {3:'c',4:'d'}
let ob3 = {ob1,ob2}
 //console.log(ob3) //-->{ ob1: { '1': 'a', '2': 'b' }, ob2: { '3': 'c', '4': 'd' } }
const ob4 = Object.assign(ob1,ob2) // isme hm start me {} ye lgate h ki code accha dikhe like Object.assign({},ob1,ob2).. vaise koi  frk nhi pdta lgaye ya nhi
 console.log(ob4) //-->{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
console.log(ob4 == ob1) // true-- means jb hum assign use krte h to jo phle likha h wo update ho jaata h
  // hmm spread operator bhi use kr skte h -- mostly yhi syntax use krenge
   
  //jb database se value aati hai to wo array of objects me aati h
  const users= [
    {
        name : "bdbhb",
        email : "hk@hmail.com"
    },
    {
        name : "bdb",
        email : "jbsb@hmail.com"
    },
    {
        name : "bb",
        email : "kh@hmail.com"
    }
  ]
  console.log(users[1].email)  // ->jbsb@hmail.com

console.log(tinderUser)  //{ id: '1254hg', name: 'saksham', age: 22 }
 // in dono methods ko hm projects me use krte h inpe loop lgane ke liye kyuki key aur values different array aa jayenge
console.log(Object.keys(tinderUser))  //-->[ 'id', 'name', 'age' ]
console.log(Object.values(tinderUser)) //==>[ '1254hg', 'saksham', 22 ]
console.log(Object.entries(tinderUser)) // [ [ 'id', '1254hg' ], [ 'name', 'saksham' ], [ 'age', 22 ] ]
 // kbhi kbhi hota h hm values nikal rhe h lekin wo property exist hi nhi krti to sue chex=ck krne ke liye 
 console.log(tinderUser.hasOwnProperty('isLoggedin')) // false


 const course = {
    coursename:"btech",
    courseinstructor:"rajeev"
 }
 const {courseinstructor} = course
 console.log(courseinstructor)
  const {courseinstructor:kapa} = course // ye use krte h agr koi naam bda ho to use chota krke use krne ke liye
 // this is called destructure of object
  console.log(kapa) 

  
 /*IN REACT
 const navbar = (company)=>{
    } // vaise ye {company} islye likha kyuki iski jagah aata to props.company to destructuring se hm direct company likh dte h

    navbar(company = "hitesh")
 */

