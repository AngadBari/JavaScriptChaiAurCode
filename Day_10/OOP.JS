//Topics:- object literal,Constructor Function,new Keyword Importances


//+++++++object literals+++++

const user={
    
    username:"angad",
    loginCount:2,

    getUserDetails:function(){
        console.log("USER Details")
        console.log(`Username:-${this.username}`)
        console.log(this)
    }
}

// console.log(user["username"])
// console.log(user.username)
// console.log(user.getUserDetails())

//Current Context--this(Keyword)



//++++++++++Constructor Function+++++++
//Allow--> One object literals to many Instances
//Reference of YourSelf



//+++++new Keyword Importances++++

// const promiseFour=new Promise()
// const Date=new Date()
//new-->This is Constructor Function

//When use:-
//1.Empty Object Create -->Instances
//2.Call Constructor function because of new
//3. add Argument
//4.give Value


function User(username,age){
   this.username=username
   this.age=age

       return this
}

const userOne=new User("angad",19)
const userTwo=new User("chaiauecode","false")//Override this value if you not give new key word
console.log(userOne)
console.log(userTwo);











 