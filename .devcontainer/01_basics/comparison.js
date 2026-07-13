// console.log(2>1)
// console.log(2>=1)
// console.log(2<1)
// console.log(2==1)
// console.log(2!=1)

//ye upar wale conversion me to koi problem nhi h



// console.log('2'>1) -> true
// console.log('02'>1) it gives true 
// console.log(02>1) it was not allowed

//in walo me kbhi null convert hota h nan and 0 ke andar so kfi confusing hai
// so inhe avoid kri jitna ho ske 
// console.log(null == 0) -> false
// console.log(null >  0) -> false
// console.log(null >= 0) -> true  is wale case me value conversion ka problem aata h js me ye values convert hoti h prr to predictable result h vo nhi aate
//javscript me jo == ,>= inka kaam krne ka trika thora different h
// ab yha line no. 6 me  js ne null ko 0 me chnage kr dia then wo true aa gya
// in case undefined ho to ye teeno operation me value false hi deta h
// strict check-> === isme value to check hoti h uske sath uska datatype bhi
//console.log('2'==2)  is case me true aaega kyuki yha automatic conversion ho jaaega 
//console.log('2' === 2) is case me false aaega kyuki datatype differnet hai 