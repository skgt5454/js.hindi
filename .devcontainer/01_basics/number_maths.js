const lm = 400

const balance = new Number(400)
console.log(balance.toFixed(1))  // 400.0
const othern = 500.1247
// precision is very useful while making an ecommerce websites in the prices precision
console.log(othern.toPrecision(2))  // 5.0e+2
console.log(othern.toPrecision(5)) //500.12

const lmg = 1000000
console.log(lmg.toLocaleString('en-IN')) // 10,00,000 ye indian standar me h age en-IN nhi denge to us standard me value aayegi

/////++++++++++ MATHS++++++++////////
// math is an object in js 
// console.log(Math) ---> object 
//console.log(Math.abs(-4)) --> this method change neg to pos
// console.log(Math.round(4.6)) -- 7
//console.log(Math.ceil(4.2)) -- ceiling method return always greater value -->5
//console.log(Math.floor(4.2))--- floor method return always lesser value-->4
// min,max method bhi h
// it has many constants like pi ,E and functions pow(),sqrt()
// console.log(Math.random()) -- ye method always different value print krega 0 to 1 ke beech me 

// in case of any problem like we hme koi problem me ya game bnana h to no. lene h 1 se 10 ke beech me to hme
// console.log((Math.random*10)+1)
// console.log(Math.floor((Math.random()*10)+1))--> return integer

// const min = 10
// const max = 20
// console.log(Math.floor(Math.random()*(max-min+1))+min) // agr mujhe chahiye 10 se 20 ke beech me ho value
// formula --> 
