//Topics:-Function


//++++++++++++++Function And Parameters++++++++//

function saymyName(){
    console.log("A")
    console.log("N")
    console.log("G")
    console.log("A")        
    console.log("D")
}

// saymyName()


// function addTwoNumber(num1,num2){
//  console.log(num1+num2)
// }

//const result=addTwoNumber(2,2)
// console.log(result) //undefined //Because function does not return anything

//num1&num2 are parameters
//2&2 are arguments

function addTwoNumber(num1,num2){
  return num1+num2
}
// const result=addTwoNumber(2,2)
// console.log(result) //4

//Function with Object


//when we dont kown how many product add in cart

function addToCart(val1,val2,...product)//...product is rest operator
  {
     return product
  }
  // console.log(addToCart(1,2,3))//that give result in array

  
//How pass object in function

const user={
  Name:"Angad",
  age:20,
}

function ojectHandler(anyobjet){
  console.log(`My name is ${anyobjet.Name} and my age is ${anyobjet.age}`)
}

// ojectHandler(user) 
// ojectHandler({Name:"Angad",age:20}) //You can also pass object like this


//Function with Array

const myArray=[1,2,3,4,5]

function returnSecondValue(getArray){
  return getArray[1]
}

// console.log(returnSecondValue(myArray))


