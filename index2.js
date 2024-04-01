// A function that that accepts two numbers to generate an array between them. 

//Call a function called arrayGenerator and put num1 and numb2 as the parameters
function arrayGenerator(num1, numb2) {
    //Generate an empty array for the new numbers
    let generatedArray=[];

// Start the loop from num1 to numb2
    for(let i = num1; i <= numb2; i++){
        //Push the numbers to the generatedArray
        generatedArray.push(i);

    }
    //Return the generatedArray
    return generatedArray;

}
//Define the two numbers for num1 and numb2
const num1 = -6;
const numb2 = 12;

//Assign the newArray to the function and the parameter
const newArray = arrayGenerator(num1, numb2)

