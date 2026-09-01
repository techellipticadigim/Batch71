
// 0 1 1 2 3 5 8 13 21 

console.log("0")
console.log("1")

let a = 0
let b = 1
let sum = a + b
console.log(sum)

while(sum <= 100){
    a = b
    b = sum 
    sum = a + b
    console.log(sum) 
}




