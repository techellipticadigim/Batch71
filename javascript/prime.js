// Prime Number

let primeArray = [];
for(let num = 4 ; num <= 100 ; num++){
if(num % 2 == 0){
    //console.log(`${num} is not prime`);
}else{
    let isPrime = true
    for(let i = 3 ; i <= num / 2; i =i +2 ){
        if(num % i == 0){
            isPrime = false;
            break;
        }
    }
    if(isPrime == true){
        primeArray.push(num);
//        console.log(`${num} is prime`);
    }else{
            //console.log(`${num} is not prime`);
    }
}
}

console.log(primeArray);