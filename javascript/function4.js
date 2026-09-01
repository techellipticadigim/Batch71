// Function



// function double(a){
//     return a*2;
// }

// function triple(a){
//     return a*3;
// }

// function fourth(a){
//     return a*4;
// }

function add(a, b){
    let c = a + b
    return c;
}

function timesGenerator(times){
    let retFunc = function (a) {
        return a * times;
    }
    return retFunc;
}

let double = timesGenerator(2);
console.log(double(50))

let triple = timesGenerator(3);
console.log(triple(100));



