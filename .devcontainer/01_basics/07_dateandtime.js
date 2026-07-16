// date is a object
// date is an single moment on any platform.. this moment define from 1 january 1970,jo dates h wo millisecond me store hoti h 
// to js ke new feature aate hai tc39 so unhone date ki ek api suggest ki h "temporal" but abhi ye proposal h only 
let mydate = new Date();
// console.log(mydate) ---> 2026-07-16T05:02:28.502Z
// console.log(mydate.toString()); -->Thu Jul 16 2026 05:04:13 GMT+0000 (Coordinated Universal Time)
// console.log(mydate.toDateString());  --> Thu Jul 16 2026
// console.log(mydate.toLocaleString()) -- >7/16/2026, 5:08:26 AM
// console.log(typeof mydate) --- > so date ek object hai
let currdate = new Date(2023,0,14)
//console.log(currdate.toDateString())  --> ye return krega Sat Jan 14 2023 kyuki in  js month start from 0 when we write in single digit
let carrdate = new Date(2023,0,14,5,3)
console.log(carrdate.toLocaleString())
let cdate = new Date("2023-01-13")// -- > jb 2 digit me ho to month 1 se start hota h
// console.log(cdate.toLocaleString()) -->1/13/2023, 12:00:00 AM
// indian standard me date "month-date-year" aise lete h
let mytimeStamp = Date.now()
// console.log(mytimeStamp);  --> ye jb 1970 se ab tk ka total time h  in millisec---->1784180005681
// console.log(cdate.getTime()) --ye 1970 se 13 jan 2023 tk ka total time h ---->1673568000000
// ye wale function jb use krte h jb hme date compare krni ho when jb hum koi hotel ka app bna rhe ho
console.log(Math.floor(Date.now()/1000 )) //-- only divide by 1000 ke sath decimal value bhi aa jati h to hme method lga denge floor ya round ka

let newdate = new Date()
// console.log(newdate.getFullYear())
// console.log(newdate.getDay())
// console.log(newdate.getMonth()+1) ----> 1 likha kyuki month 0 se start hota h js me 
// agr hme modify format ko kisi bhi date and time ka like to ...
// newdate.toLocaleString('default',{
//     weekday: "long",
//     day:"vaar"
// })




