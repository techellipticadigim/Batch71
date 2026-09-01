"use strict"
const { userInfo } = require("os")

// Javascrit obejct notation 
let userinfo = {
    "name": "Vaibhav",
    "age" : 36,
    "address" : "",
    "contact" : {
        "mobile": "919764326834",
        "landline": "0201243242",
        "email" : "vaibhavlsdfsdfafd@gmail.com"
    },
    "socialMedia":{
        "wahtsapp": "",
        "linkdin" : ""
    }
}
console.log(typeof userinfo.contact.landline)
