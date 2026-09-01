// implicit global - globally visible variable
// var - globally visible variable
// let - block 
// const - block 


// Hoisting in javascript 
var a1 = 10;
var a1 = 30;
{
    {
     var a = 20;
     console.log(a); 
    }   
    {
        console.log(a);  
    }
}
