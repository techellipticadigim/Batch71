// data type in javascript
// number datatype - whole number, floating number

// let a  = (10/3).toFixed(1);
// console.log(typeof a);
// console.log(a);


// Mindset - user prospective mindset

// number 3 ways
// 1 - lateral way 
// let a = "10px"
// console.log(a);

// 2 - constructor way - Number
// let a = Number("10px");
// console.log(a);
// console.log(typeof a);
// NaN = not a number

// 3 parseInt way

// let a = parseInt("px10.2px");
// console.log(a);
// console.log(typeof a);


// let b = 10/0;
// console.log(b);

// console.log(Number.MAX_SAFE_INTEGER);
// 9007199254740991
// Max-safe value = 
// console.log(Number.MAX_SAFE_INTEGER - 1);
// console.log(Number.MAX_SAFE_INTEGER - 2);

// Bigint

let a = 104693218461923847619234876193481763918736918374691328476193248761923487612394781632948761234918723469123847691238769123487612938476192348761232843912374891237489173983232n;
a = a + 2n;
console.log(a);

let b = BigInt("18237927394872397893");
console.log(b)
b = b + 5n;


