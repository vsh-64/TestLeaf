
/**
 * This method requires a number as input to check whether it is a even number or odd 
 * @param {*} number 
 */
function isOddOrEven(number) {
    if (number % 2 === 0)    // checking whether number is divisible by 2 to check it is even or odd
        console.log(number + " is an even number");
    else
        console.log(number + " is an odd even");
}

isOddOrEven(10)