
//+++++++++++++++++++Promise:- ++++++++++++
// You don't have to complete the task immediately — you just say, "I'm working on it, and I'll give you the result later."

//Three states of a promise:
                         // 1. Pending: The initial state, neither fulfilled nor rejected.
                         // 2. Fulfilled: The operation completed successfully.
                         // 3. Rejected: The operation failed.


//++++When Promise not Avliable++
//That default use async and await
//Best Libary:-Q And BlueBirds(That time Use)



//++++++Creation Of Promise(Diffrent Way:-)+++++++++++++
//1.Comsume Or 2.Create Promise

//+++++++++++++1 way++++++++++

//2.Create Promise
const promiseOne= new Promise(function(resolve,reject){
    //Do an async task
    //DB Calss,cryptography,netwok

    setTimeout(function(){
        // console.log("Async  task is Compelete")
        resolve()//when this function call then .then return value,also you give data also..
    },1000)
}) 

//1.Consume Promise
promiseOne.then(function(){
    //return the value
    // console.log("promise consumed")

})


//+++++++++++++++++2 way++++

new Promise(function(resolve,reject){
    setTimeout(()=>{
        // console.log("Async task 2")
        resolve()
    },1000)
}).then(()=>{
    // console.log("Promise2 Consumed..")
})

//+++++++++3 way++++++++

const PromiseThree=new Promise((resolve,reject)=>{
  setTimeout(()=>{
         resolve({username:"Angad",email:"angadbari@gmail.com"})//Data from any ntewok or DB...
  },1000)
})

PromiseThree.then((user)=>{
   console.log(user)
})

//+++++++++++ 4 Way+++++++++

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