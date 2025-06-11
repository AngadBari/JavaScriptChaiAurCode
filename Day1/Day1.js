//Topics:-Coversion,DataTypes,Memory,Array


//++++++++++++Coversion++++++++++++++

//Number to String Coversion

const numinString="33"
// console.log(`Befor Covesion:- ${typeof(numinString)}`)

//To Number
const CovetToNumber=Number(numinString)
// console.log(`After Consvesion:-${typeof(CovetToNumber)}`)

//To Boolean
const CovetToBoolean=Boolean(numinString)
// console.log(`After Consvesion:-${typeof CovetToBoolean}`);

//DIMANG Chalao Bhai eidher
const WhatDatatype="1" + 2;
// console.log(WhatDatatype)
// console.log(typeof(WhatDatatype))
const Whatdatatype=1+1
// console.log(Whatdatatype)
// console.log(typeof(Whatdatatype))


//++++++++++++++Data Types in JavaScript++++++++++++++

//1.Primative Data Types:-Number, String, Boolean, Null, Undefined, Symbol, BigInt
//2.Non-primative Data Types:-Object, Array, Function

const symbolExample=Symbol("example");
// console.log(symbolExample);

const bigIntExample=BigInt(1234567890123456789012345678901234567890);
// console.log(bigIntExample);

//++++++++++Stack(Primative(LIFO)) And Heap(Non-primative(FIFO))++++++

//1.Stack:Give copy of Orignal Value,Not change in Original value.(Deep copy).

let myName="Angad"
let myAnotherName=myName
myAnotherName="Ayush"
//console.log(myName); // Output: Angad
//console.log(myAnotherName);// Output: Ayush

//2.Heap:Give reference of Orignal Value,Change in Original value.(shallow copy).

let user1={
    name:"Angad",
    age:20
}

let user2=user1
//in that user2 is a reference to user1
user2.age=19
//console.log(user1); // Output: { name: 'Angad', age: 19 }

//++++++++++++++++++++++++++Array (Part 1)+++++++++++++++++++++++++++++++++++++++++++++

    
//Array:is collection of multiple of item like number,string and any more.
//Array is Object.
//Array element access by using Indexcing.start from 0,1,2,...
//

//+++++++Declaration:-[]++++

const myarr=[0, 1, 2, 3, 4, 5]
const myHeors=["Shaktiman", "Doraemon", "Spiderman", "Superman"]
//Access Vlaue:-
//console.log(myHeors[1])
const myarr2=[1,2,3,4,"Shaktiman","Spiderman",true]
const myarr3=new Array( 1, 2, 3, 4)
//console.log(myarr3)

//+++++++++++++++Array Methods:-+++++++++++++++++++++++++++++++

//  const myarr1=[1, 2, 3, 4, 5]
// console.log(myarr1)

//1. push():-Add element at the end of array.
//myarr1.push(6)

//2. pop():-Remove element at the end of array.
//myarr1.pop()

//3. unshift():-Add element at the start of array.
//myarr1.unshift(0)
//console.log(myarr1)
//myarr1.shift()//:Remove element at the start of array.
//console.log(myarr1)

//+++++++++++++++Questing Methods:-++++++++++++++++++++++++

//4. indexOf():-Find the index of element in array.
//console.log(myarr1.indexOf(3)) 

//5. includes():-Check the element is present in array or not.
//console.log(myarr1.includes(9))

//Join():provieds result in string format.datatype is string.
//const mynewArr=myarr1.join()
//console.log(mynewArr)
//console.log(`mynewArr datatype:-`,typeof (mynewArr))

// ++++++++++++++++++Slice() Or Splice()+++++++++++++++++++

//++++1.Slice():-when use slice(1,3) it gives value from index 1 to 2 but not chanes the original array.++++++++++
// const arr1=[1, 2 ,3, 4, 5]
// console.log("Orignal Array:-",arr1)
// console.log("Slice Array:-",arr1.slice(1,3))
// console.log(" After Slice() use Orignal Array:-",arr1) 

//2.Splice():when use splice(1,3) it gives value from index 1 to 3 but chanes the original array.

// const arr2=[1, 2 ,3, 4, 5]
// console.log("Orignal Array:-",arr2)
// console.log("Splice Array:-",arr2.splice(1,3)) 
// console.log(" After Splice() use Orignal Array:-",arr2)

//check Mthods MDN DOC:-


//++++++++++++++++Array (Part2)++++++++++++++++++++++++++++++++++++++++++++

//1
const marvel_heroes= ["Thor", "Ironman", "Hulk", "Captain America"]
const dc_heroes= ["Batman", "Superman", "Flash", "Aquaman"]
//marvel_heroes.push(dc_heroes)//this not marge array dc_heroes indexpostion is 4
// console.log(marvel_heroes.indexOf(dc_heroes))
// console.log(marvel_heroes[4][2])

//+++++++++++++++Marge Array+++++++++++++++

//2.concat():-Marge two array

const all_heroes=marvel_heroes.concat(dc_heroes)
 //console.log(all_heroes)

//3.SpreteOpreter(...NameofArray)

const all_new_Array=[...marvel_heroes,...dc_heroes]
//console.log(all_new_Array)

//++++++++++------+++++++++

//4.flat():-Convert multi-dimensional array to single dimensional array.
const multi_dimensional_array=[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
const single_dimensional_array=multi_dimensional_array.flat(Infinity)
// console.log(single_dimensional_array)




















