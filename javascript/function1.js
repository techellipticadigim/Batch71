
// reusability - function
// function -> service
// input -> process -> outcome 

// add + 
// input - 2
// output - 1

let sum = add(10, 30);
console.log(sum)

// implicit global
// var 

function add(a, b=0, d=0){
    let c = a + b + d;
    return c
}

function substraction(a, b){
    let c = a - b;
    return c
}

function multiply(a,b){
    let c = a * b;
    return c
}

function sqaure(a){
    let c = multiply(a, a)
    return c;
}

