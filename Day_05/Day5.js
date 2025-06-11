//Topics:-Condtion Statement

//++++++++++Interview IMP++++++

//++++++JavaScript Excution Context++
  //Check Book


  //+++++++++++++Control Flow In JavaScript+++++++++

  //1.If Statement

    //   if (condition) {
    //       // code to be executed if condition is true
    //       //condition ===true Always(Means any condition which is true that run ,Comparesion also there,)
    //   }

//Comparesion Operators
        //==,===,!=,!==,>,<,>=,<=
        //==  (value is equal)
        //=== (value and type is equal)
        //!=  (value is not equal)
        //!== (value and type is not equal)
        //>   (greater than)
        //<   (less than)
        //>=  (greater than or equal to)
        //<=  (less than or equal to)
        //&&  (Both conditions are true then it will run)
        //||  (One of the conditions is true then it will run)


if(2 === '2')
{
    console.log("2 is equal to 2");
}


//2.IF-Else Statement

// const temperature = 30;

// if(temperature > 30) {
//     console.log("It's a hot day");
// }
// else{
//      console.log("It's not a hot day");
// }

//short hand if else(it,s Call Implicit Return)

// const Balances=1000

// if(Balances>500) console.log("You can buy a new phone")


//+++++++++3.If-Else If-Else Statement+++++++

// const marks = 85;

// if(marks > 90) 
//     {
//         console.log("Grade A");
//     }
//     else if(marks > 80) 
//     {
//         console.log("Grade B");
//     }
//     else
//     {
//         console.lpg("Fail");
//     }


// +++++&&+++++

// const userLoggIn= true;
// const debitCard= true

// if(userLoggIn && debitCard) 
// {
//     console.log("You can buy a new phone");
// }

//++++++||++++

// const LoginFromGoogle = false;
// const LoginFromEmail = true;

// if(LoginFromGoogle || LoginFromEmail)
// {
//     console.log("Successfully logged in");
// }


//++++++++4.Switch Statement++++++++

 const day = 3;
 switch(day) {
     case 1:
         console.log("Monday");
         break;
     case 2:
         console.log("Tuesday");
         break;
     case 3:
         console.log("Wednesday");
         break;
     case 4:
         console.log("Thursday");
       break;
}


//+++Condition Statement True And False Vlaue+++++++

//Fasle Values:-fasle,0,"",null,undefined,NaN
//True Values:-true,1,"0"," ",[],{}


//Nuslish Coalescing Operator(??)--->when load Time ,null or Undefine

//Terniary Opreter (?)-->     (condition)?:("satement") : ("staement")


   
   