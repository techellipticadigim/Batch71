// setTimeout
// 3 second
function click(element){
    setTimeout(()=>{
        console.log(element + " clicked")
    }, 3000);
}

// 1 sec
function enterData(element, data){
    setTimeout(() => {
        console.log(element + " entered data with " +data)
    }, 4000);
}

click("Login link")
enterData("username", "vaibhav")
enterData("password", "pass")
click("login button")

// Promises
