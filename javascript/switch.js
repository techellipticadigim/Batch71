// Switch case 



let monthName = "Jan";
let monthNumber = 0;

// switch case - only apply on equality 
// 1 - default wil run when no case mathc
// 2 - break is mandatory
switch(monthName){
    case "Jan":
    case "January":
    case "JAN":
        monthNumber = 1;
        break;

    case "Feb":
    case "Feburay":
    case "FEB":
        monthNumber = 2;
        break;  
        
    default:
        monthNumber = -1;
        break;    
}

console.log(monthName + " -> " + monthNumber);