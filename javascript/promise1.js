function click(element){
    let p1 = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(element + " clicked");
        }, 3000);
    });
    return p1;
}
function enterData(element, data){
    // let p2 = new Promise((resolve, reject) => {
    // setTimeout(() => {
    //     reject(element + " entered data with " +data);
    // }, 4000);
    //  });
    //  return p2;

    let p2= Promise.resolve("Work done");
    return p2;
}


 click("Login link").then((msg)=>{
    console.log(msg);
    return enterData("username", "vaibhav");
 }).then((msg)=>{
    console.log(msg);
    return enterData("password", "pass");
 }).then((msg)=>{
    console.log(msg);
    return click("login button");
 }).catch((msg) => {
    console.log("Some issue found. so failed")
 });

// Promise.resolve()
// Promise.reject()
// Promise.allSettled();
// Promise.all();

// await - stop the function until promise is not resolved 
// await will always be inside a async function
// await - always works with promise return function
//
async function runMyTest(){
    try{
    await click("Login link");
    await enterData("username", "vaibhav");
    await enterData("password", "pass");
    await click("login button");
    }catch(err){
        console.log(err)
    }
 }





// enterData("username", "vaibhav")
// enterData("password", "pass")
// click("login button")

// Promise - response 
// state = pending, fullfilled (then) , rejected (catch)

// let z =15;
// let p1 = new Promise((a, b) => {
//     if(z <= 10){
//         a("vaibhav singh is resolved")
//     }else{
//         b("vaibhav singh is reject");
//     }
// })

// p1.then((msg) =>{
//     console.log("Then : " + msg);
// }).catch((msg) =>{
//     console.log("Catch : " + msg)
// })
