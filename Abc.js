
function f()
{
    console.log('Raunak')
}
f()
//document.getElementById("ID1").textContent='Hii Raunak'


// To make any fn arrow just remove fn keyword and add arrow thats it

let x=function(){ console.log("In the Anonynmous function")}
x();

// Arrow Functions
let y=function(a,b){
    return a+b;
}
console.log(y(3,4));
// return value by default
let z=(a,b)=>a+b
console.log(z(5,4));

//////////////////////////////////////////////////LET VAR ////////////////////////////////////////////////////////
/*
let block scope
var function scope

we can use var before declaring it gives undefined
but int case of let and const we cant access it gives error

*/

////////////////////////////////////////////ALERTS////////////////////////////////////////////////////////////////

// alert('HI THIS IS HIGH ALERT')
// confirm("Would you like to proceed") // return true if confirmed Okay else false if cancelled
//  const input=prompt("Enter Your Name")
//  console.log(input)

const my_Name="Raunak"
const d=`Hii My Name is ${my_Name}` // STRING LITERAL
console.log(d)

////////////////////////////FOR Each && map /////////////////////////////////////////////////////

const arr=["Hi","1","2"]
for(ele of arr)
{
    console.log(ele)
}
arr.forEach(function(x)
{
    console.log(x)

})
// always return undefined even if you return something
arr.forEach((x)=>
{
    console.log(x)
}
)

arr.map((x,idx)=>
{
    console.log(x)
    console.log(idx)
})
const barry=[1,2,3,4]
   const newarray=  barry.map((x,idx,barry)=>
    {
        return x*2
        
    })
    console.log(newarray);

const arr1=["abc","jiii","45922","a","cb"]
const newarr1=arr1.filter((x,idx,arr1)=>
{
    return x.length>2
})


console.log(newarr1)
// map() returns a new array of the same length as the original, with each element transformed by the provided function.
// filter() returns a new array that may have fewer elements, as it only includes elements for which the provided function returns true.