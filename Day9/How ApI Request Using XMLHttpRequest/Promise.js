
//+++++++++++++++++++Promise:- ++++++++++++

//1.Promise -->Object
//2.You don't have to complete the task immediately — you just say, "I'm working on it, and I'll give you the result later."
//3.Three states of a promise:
                         // 1. Pending: The initial state, neither fulfilled nor rejected.
                         // 2. Fulfilled: The operation completed successfully.
                         // 3. Rejected: The operation failed.


//++++++++++When Promise not Avliable++++++

//That default use async and await
//Best Libary:-Q And BlueBirds(That time Use)



//++++++Creation Of Promise(Different Way:-)+++++++++++++

//1.Comsume Or 2.Create Promise


//+++++++++++++ 1 way ++++++++++

//2.Create Promise
const promiseOne= new Promise(function(resolve,reject){
    //Do an async task
    //DB Calss,cryptography,netwok

    setTimeout(function(){
         console.log("Async  task is Compelete")
        resolve()//when this function call then .then return value,also you give data also..
    },1000)
}) 

//1.Consume Promise
promiseOne.then(function(){
    //return the value
     console.log("promise consumed")

})


//+++++++++++++++++ 2 Way +++++++++++++++++

new Promise(function(resolve,reject){
    setTimeout(()=>{
         console.log("Async task 2")
        resolve()
    },1000)
}).then(()=>{
    console.log("Promise2 Consumed..")
})

//+++++++++++++++++++ 3 Way +++++++++++++++

const PromiseThree=new Promise((resolve,reject)=>{
  setTimeout(()=>{
         resolve({username:"Angad",email:"angadbari@gmail.com"})//Data from any ntewok or DB...
  },1000)
})

PromiseThree.then((user)=>{
   console.log(user)
})

//++++++++++++++++++++ 4 Way ++++++++++++++++++++++++++++

const promiseFour= new Promise((resolve,reject)=>{
   setTimeout(()=>{
     let error=true
     if(!error)
     {
        resolve({username:"Bari",password:"123"})
     }
     else
     {
        reject('ERROR:Somthing went wrong')
     }
   },1000)

})

promiseFour
.then((user)=>{
    console.log(user)
    return user.username
})
.then((username)=>{
    console.log(username)
})//this call Chaining
.catch((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log("The Promise is either reslove or reject...")
})//allways excute


//++++++++++++++++++++ 5 Way +++++++++++++++++++++

const PromiseFive=new Promise((resolve,reject)=>{
    setTimeout(() => {
      let error = true;
      if (!error) {
        resolve({ username: "JavaScript", password: "123" });
      } else {
        reject("ERROR:Somthing went wrong");
      }
    }, 1000);
})

async function consumePromiseFive(){
    try {
        const response=await PromiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive()

//++++++++++++++++++=====+++++++++++++

async function getAllUser(){
 try {
     const response =await fetch("https://api.github.com/users/AngadBari");
     const data=await response.json()
     console.log(data)
 } catch (error) {
    console.log(error)
 }
}
// getAllUser();

//++++++++Above Code Using .then and .Catch+++++++

fetch("https://api.github.com/users/AngadBari")
.then((response)=>{
    return response.json()
})
.then((data)=>{
   console.log(data)
})
.catch((error)=>{
   console.log("ERROR",error)
})



