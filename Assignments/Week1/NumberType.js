/**
 * This method requires a number as an input to check the type of number and return the type whther it is positive . negative or whole number 
 * @param {*} number 
 * @returns a string
 */
function checkNumber(number) {

    if (number > 0)
        return number + " is a positive number";
    else if (number < 0)
        return number + " is a negative number";
    else
        return number + " is a neutral number";
}
console.log(checkNumber(0));