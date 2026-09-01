// realtional

// > >= < <= == !=

let a1 = 10;
let a2 = "10";

console.log(a1 > a2);  // false
console.log(a1 >= a2); // true
console.log(a1 < a2); // false
console.log(a1 <= a2); // true
console.log(a1 == a2); // true , only check values
console.log(a1 != a2); // false, only check values
console.log(a1 === a2); // false , value + type check
console.log(a1 !== a2); // true, value + type check

let b1 = Number("12px");
let b2 = Number("12px");
console.log(b1 === b2);
