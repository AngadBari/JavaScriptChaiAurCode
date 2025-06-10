
//++++++++++Scope+++++++++++

// 1.Global Scope:accessible from anywhere in the code,
//2.Block Scope:Access only in Block scope.{}



//  let a=20
// // const b=20
// var c=30//problem with var is that it is function scoped

if(true)
{
    let a=10
    var c=300
    //  console.log("Inner:",a)
    // console.log("Inner:",c)
}

// console.log("Outer:",c)//Ths is the problem with var,output is 30,but give 300

//3.Nested Scope:Access in nested scope

 function One()
 {
    const userName="Angad"

    function Two()
    {
        const userAge=20
        console.log(userName) //Accessing userName from outer function
    }
    // console.log(userAge) //Error not accessible here

    Two() 
 }

 One()

//+++++++++++Intersesting Fact+++++++++++

function  addOne(num1){
    return num1+1
}

addOne(2) //you call function before declaration


const addTwo=function(num1){
    return num1+2
}

addTwo(2) //you can`t call function before declaration






