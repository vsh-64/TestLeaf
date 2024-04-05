/**
 * This method requires start number and end number to return the odd number bewtwen the given range
 * @param {*} startRange 
 * @param {*} EndRange 
 * @returns String
 */
function printOddNumbers(startRange, EndRange) {
    let oddNumbers = "";
    for (let i = startRange; i <= EndRange; i++) { // looping through the given ranges 
        if (i % 2 === 1){                          //  checking if number is divisible by 2 and remainder is 1 
            oddNumbers += (i +" ");                // to print all the oddnumbers in the console - storing in a string variable
        }
    }
    return oddNumbers;
}

console.log(printOddNumbers(1,25));