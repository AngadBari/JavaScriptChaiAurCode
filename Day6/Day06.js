
//Filter, Map And Reduce

// const coding =["js","java","python","c++","c#","php"];

// const value=coding.forEach((iteam)=>{
//     // console.log(iteam)
//     return iteam
// })

//  console.log(value)

const num=[1,2,3,4,5,6,7,8,9,10]

// const displaynumber=num.filter((nums)=>{ return nums>5})
const displaynumber = num.filter((nums) =>{
   return nums >= 5;

});

// console.log(displaynumber)


//++++++++++++++++Map -Automaticlay Returun values


const myNumber=[1,2,3,4,5,6,7,8,9,10]
 const display=myNumber.map((num)=> num+10)
//console.log(display)

myNumber.forEach((iteam)=>{
    // console.log(iteam+10)
})

//+++++Reduce

const myNums=[1,2,3]

const Total=myNums.reduce((acc,currval)=>{
    return acc+currval
},0)

console.log(Total)


2===2
if(2===2){
    console.log("True")     
}
