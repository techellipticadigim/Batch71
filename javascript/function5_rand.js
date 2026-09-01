// random

// 1 to 100 
// 200 - 500
// let start = 300
// let end = 400
// let range = end - start ;

// // string randome string 
// let str = "abcdefghijklmnopqrstuvwxyz1234567890"; // 36
// let ranLen = 10



// console.log(randomString)


export function generateRandomString(len, sampleChar){
    let retFunc = function createRandom(){
        let randomString = "";
            for(let i = 1;i <= len; i++){
                let strLen = sampleChar.length;
                let v = parseInt(Math.random() * strLen)
                randomString = randomString + sampleChar.charAt(v);
            }
            return randomString;
        }
        return retFunc;
}


export let onlyCapitalLetterRandom = generateRandomString(10, "ABCEFGHIJ");
export let onlySmallLetterRandom = generateRandomString(10, "ABCEFGHIJ".toLowerCase());
export let onlyNumbersRandom = generateRandomString(10, "1234567890");
export let onlyAlphaNumericRandom = generateRandomString(10, "abcdefghij1234567890");


