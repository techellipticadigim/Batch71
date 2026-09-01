





// function f1(){
//     return Promise.resolve("hello");
// }


// f1().then((msg)=>{
//     console.log("then " + msg)
// }).catch((msg) =>{
//     console.log("catch " + msg);
// })

    // 4 sec
    let p1 = new Promise((resolve, reject) => {
       setTimeout(
            ()=>resolve("testcase1 passed"),
        4000);
    })


    // 1 sec
    let p2 = new Promise((resolve, reject) => {
        setTimeout(
            ()=>resolve("testcase2 passed"),
        1000);
    });

    // 2 sec
    let p3 = new Promise((resolve, reject) => {
        setTimeout(
            ()=>reject("testcase3 passed"),
        2000);
    })
    
try{
    const t1 = await Promise.allSettled([p1,p2,p3]);
    console.log(t1);
}catch(err){
    console.log(err)
}


// resolve
// reject
// race
// all - as soon as it find a failure. its fails
// allSettled = it will wait for all promise to finish

