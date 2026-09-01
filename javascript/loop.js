// Loops in javascript

// What is loop?
// iteration - running same task many time 


// 7 days

// i will keep executing my iterations (action) until i am satisfied with condition 

//1 - 10
// console.log()


// while (condition check and then code execution)

// let i = 20;
// while(i <= 10){ // 11 <= 10
//     console.log(i);
//     i++;
// }

// do while (code execution and then condition check)
// it execute atleast once

// let j = 20;
// do{
//     console.log(j);
//     j++;
// }while(j <= 10);


// for loop
let rows= 5;

for( let k = -rows  ; k <= rows ; k++){
    let starStr = "";
    for(let m = 1; m <= k; m++){
        starStr += "* ";
    }
    console.log(starStr);
}

// backward direction
// 10

