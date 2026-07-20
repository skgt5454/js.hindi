// for loops
// jaise hi for lgaya to uska mtlb for keyword initialise hua
for(let i = 0;i<10;i++)
{
    const element = i;
    if(element==5)
    {
        console.log("5 is not defined")
    }
}
//console.log(element)
//idhar ab hum i aur element print karwaenge to print nhi hoga kyuki vo scope ke andar h
//agr mujhe kisi bhi word ko sab jagah ek sath change krna h to use select kro then jitni jagah change krna h utni baar ctrl+d daba do
for(let i = 0;i<=10;i++) // idhar hum i use kr skte h h kyuki uska ilaka/ scope vhi tk ka tha
{
    console.log(`outer loop value:${i}`)
    for(let j = 0;j<=10;j++) // idhar hum i use kr skte h h kyuki uska ilaka/ scope vhi tk ka tha
{
    console.log(`inner loop value: ${j}`)
}
}

// break and continue statement
for(let i = 0;i<5;i++)
{
    if(i==5)
    {
        break;
    }
    console.log(`value of i is ${i}`)
}







