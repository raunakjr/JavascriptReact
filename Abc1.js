

//The return type of reduce() will be the same as the type of the accumulator that gets returned
// in each iteration and depends on the initial value.////////////////////
const arr3=[1,2,3,4,5]
/*
const num=arr3.reduce((accum,ele,idx,arr)=>
{
    console.log(ele)

})
this will print 2 3 4 5 only




    const num=arr3.reduce((accum,ele,idx,arr)=>
    {
        console.log(ele)
    
    },98)

Now this will print whole array

    const num=arr3.reduce((accum,ele,idx,arr)=>
    {
        
        console.log(accum)
        return "hi"
    
    },98)
    console.log(num)

// it gives output 98,hi,hi,hi,hi... means accum first iniatilse itself then take value from return


const num=arr3.reduce((accum,ele,idx,arr)=>
    {
        
       // console.log(accum) // 98 99 101 104 108
        return accum+ele;
    
    },98)

console.log(num) // 113 (108+5)
*/
// to get sum of element

   const sum=arr3.reduce((accum,ele,idx,arr)=>
    {
        
        return accum+ele
    
    },0)
    console.log(sum) // 15


//////////////////////////Arguments keyword not work on arrow fn////////////////
// arguments is not any array , now a days we use ...num sres param operator instead of arguments
/*
function sum1()
{
    let sum=0
    for(let e=0;e<arguments.length;e++)
    sum+=arguments[e]
    
    return sum
}
*/
const sum1=function ()
{
    let sum=0
    for(let e=0;e<arguments.length;e++)
    sum+=arguments[e]
    
    return sum
}


console.log(sum1(19,12))
/*

function Fun(a,b,c)
{
    return a+b+c;
}

const Fun=function(a,b,c)
{
    return a+b+c;
}

const Fun=(a,b,c)=>
{
    return a+b+c;
}
console.log(Fun(4,5,6));
*/

//-----------------------------------Spread operator----------------------------------------------------

let arr = [1, 2, 3];
let newArr = [0, ...arr, 4, 5];  // Add 0 at the start, and 4, 5 at the end
console.log(newArr);  // Output: [0, 1, 2, 3, 4, 5]

//----------------------------Rest Para (must be last para)-------------------------------------------------
const sum3=function (...nums)
{
    let sum=0
    for(let e=0;e<nums.length;e++)
    sum+=nums[e]
    
    return sum
}


console.log(sum3(...arr)) // 6

// if we function(a,b,c,...nums)  a=1 b=2 c=3 nums 4 ,5

// ------------------------------Destructring----------------------------------------------------------        

const color=["red",'blue',"green","black"]
const [a,b]=color;
console.log(a,b); // red blue
const [,,,d]=color
console.log(d) // black

const {2:cc}=color
console.log(cc) // green
// to destructe the obj we use {}
