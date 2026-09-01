

// if else 

    // let a = 9;
    // let valueType = (a % 2 == 0) ? "Even Number" : "Odd Number";
    // console.log(valueType);

    // ternary operator
    // if else operator ,  ? : 


    // age  , <18 = child, 18-30 = adult, 31-45 = mature, ,>45 = old 
    // agegroup

    let age = 32;
    let ageGroup = "";

    if(age <= 18){
        ageGroup = "Child";
    }else if(age>18 && age <= 34){
        ageGroup = "Adult";
    }else if(age > 30 && age <= 45){
        ageGroup = "Mature";
    }else{
        ageGroup = "old";
    }

    console.log(`age : ${age} : ${ageGroup}`);
        
    


