
//+++++++++++++++++This And Arrow Function++++++++

//This:-Curent Context

const user={
    username:"Angad",
    age:20,

   welcomeMessage:function (){
        console.log(`Welcome ${this.username} to the world of JavaScript`)

        // console.log(this)//This refers to the current Object
    }

}

// user.welcomeMessage() 
user.username="Ankit" 
// user.welcomeMessage() 
// console.log(this)//This refes to the global objectbut empty because no any property in global object

//But before js run in browaer this refers to the window object



//+++++++++Arrow Function++++++

//  function userInfo() {
//   console.log("Hello");
//   console.log(this);
// };


//userInfo();

// const userInfo=function(){
//     console.log("Hello")
//     console.log(this) 
// }


const userInfo=()=>{
    console.log("Hello");
    console.log(this);//But give me empty object because arrow function does not have its own this context
}
//userInfo()

//++++ Some Intersting About Arrow Function+++

// const chai=(num1,num2)=>{
//     return num1+num2;
// }

//+++It call Implicit Return+++

// const chai = (num1, num2) =>  num1 + num2;

//const chai = (num1, num2) =>  (num1 + num2);

const chai = (num1, num2) =>  ({username:"Angad"});//when Oject

//console.log(chai(2,3)) 


//++++ Immediately Invoked Function Expression (IIFE)++++++++

//IIFE Use:To avoid polluting problem form global variables

(function chai(){
    console.log("Hello from IIFE");
})();
//; is use otherwise afer we use anther function it will give error
(()=>{
    console.log("Hello from IIFE Arrow Function");
})()
