
//for

// for (let i = 0; i <=10; i++) {
//     const element = i;
//     console.log(i)
    
// }

//+++++++break and continue+++

//While Loop

//  let i=0

//  while(i<=10)
//  {
//     console.log(i);
//     i++
//  }

// const myarray = ["Angad","Ayush","chinu","Babu"]

// let arr=0

// while( arr<myarray.length)
// {
//     console.log(myarray[arr]);
//     arr++;
// }


//do while loop

// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i <= 10);



//+++for of++++

const myarray = ["Angad","Ayush","chinu","Babu"]
for (const element of myarray) {
    // console.log(element);
}


//Maps=Store  all value Unique keys and values

const myMap = new Map();
myMap.set("name", "Angad");
myMap.set("age", 20);
myMap.set("city", "Delhi");
myMap.set("country", "India");

// console.log(myMap);



for (const [key, value] of myMap) {
    // console.log(`${key}: ${value}`);
}

const myObj={
    name: "Angad",
    age: 20,
    city: "Delhi",
    country: "India"
}

// for (const [key,value] of myObj) {
//     // console.log(`${key}: ${value}`);//that not work
// }

//++++for in Loop++++

const lngObject = {
    js:"JavaScript",
    py:"Python",
    rb:"Ruby",
}

for (const key in lngObject) {
    // console.log(`${key}: ${lngObject[key]}`); //key is the property name, lngObject[key] is the value
}

const arr1= ["Angad", "Ayush", "chinu", "Babu"];

for (const key in arr1) {
    // console.log(arr1[key])
}


//+++++forEach Loop+++++(Higher Order array loop)

const arr2 = ["Angad", "Ayush", "chinu", "Babu"];
arr2.forEach((name)=>{
    //console.log(name);
})

const arr3 =
[
    {name: "Angad", age: 20},
    {name: "Ayush", age: 21},
    {name: "Chinu", age: 22},
    {name: "Babu", age: 23}
]

arr3.forEach((user)=>{
    // console.log(user.name);
    // console.log(user.age);
});





