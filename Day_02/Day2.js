//Topics:-Object,




//++++++++++++++Object+++++++++

// Object is a collection of key-value pairs.
// Key is a string and value can be of any data type.
//2 Type of Object Declaration:-
                             // 1.Literal Notation
                            // 2.Constructor Notation(singleton)

//++++++++ 1. Literal Notation++++++++++++++++

   const mySym=Symbol("mykey1")//Inteview Question://How Acess Symbol in Object*

  const User1={
    name:"Angad",
    mySym:"mykey1",//this not working like symbole,it working like string
    [mySym]: "mykey2", //this is working like symbole*
    "full name":"Angad Bari",
    age:20,
    location:"Dahanu",
    email:"angadbari2@gmail.com"
  }
    
//+++++ Accessing Object+++

// console.log(User1.name)//This not good way see if you access fullname then but most time use
// console.log(User1["name"])
// console.log(User1["full name"])
//console.log(User1[mySym])//Accessing Symbol

//+++++Change Value of Object and Add New Key-Value Pair++++++++++

User1.name="Ayush"
User1.isMarried=false
// console.log(User1.name)
//  console.log(User1)


///+++++++++++++++++++++++++Object Part 2++++++++++++++++++++++++++

//++++++++++++2.Constructor Notation(singleton)++++++

//const tinderUsre=new Object()

const tinderUser={}

tinderUser.name="Angad"
tinderUser.age=20 
tinderUser.isMarried=false
tinderUser.location="Dahanu"
//console.log(tinderUsre)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser)) 

//+++++++++Nested Object++++++++++++++

const RegulerUsre={
  email:"someone@gmail.com",
  fullname:{
    userName:{
      firstName:"Angad",
      lastName:"Bari"
    }
  }
}

// console.log(RegulerUsre.fullname)
// console.log(RegulerUsre.fullname.userName)
// console.log(RegulerUsre.fullname.userName.firstName)


//++++++++++++++++Marge Object+++++++++++++

const obj1={1:"a",2:"b",3:"c"}
const obj2={4:"d",5:"e",6:"f"}
const obj3={...obj1,...obj2} //Spread Operator
const obj4=Object.assign({},obj1,obj2) //Object.assign() Method
// console.log(obj3) 
// console.log(obj4)



//Object Destructuring

const couser={
  couserName:"Javascrpit",
  price:199,
  couserAuthor:"Angad Bari"
}

const{couserName:cname}=couser;
//console.log(cname)

//JSON API

{

}
[
  {},
  {},
  {},
]





