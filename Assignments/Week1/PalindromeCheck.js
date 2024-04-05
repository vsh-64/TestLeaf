

// calling palindrome function
let s1 = "malayalam";
let s2 = "madam";
isPalindrome(s1, reverseAString(s1)); // checking palindrome with string reverse function without split function
isPalindrome(s2, reverseAStringUsingSplit(s2)); // checking palindrome with string reverse function with split function

/***
 * This method requires a string value as input and it performs reverse opertion on it and returns the string
 * @param String
 * @returns String 
*/
function reverseAString(str) {
    let reverse = "";
    let lengthOfString = str.length;    //  to get the length of the string
    for (let i = lengthOfString - 1; i >= 0; i--) { // looping through the string indexes
        reverse = reverse + str[i]; 
    }
    return reverse;
}

/**
 * This method requires both string and reversed string as input to check it is palindrome or not 
 * @param {*} string 
 * @returns {*} String 
 */
function isPalindrome(string, reversedString) {
    if (string === reversedString) { // comparing both string and reversed string
        console.log(string + " is palindrome:");
    }
    else console.log(string + " is not palindrome:");
}


/***
 * This method requires a string value as input and it performs reverse opertion on it using split function and returns the string
 * @param String
 * @returns String 
*/
function reverseAStringUsingSplit(str) {
    let reverseUsingSplit = "";

    let ch = str.split(""); // splittng the string into character array
    let len = str.length;   //  to get the length of the string
    for (let i = len - 1; i >= 0; i--) { // looping through the string characters using character indexes
        reverseUsingSplit += ch[i] // adding the character to the string varaibale one after the other
    } 
    return reverseUsingSplit;
}


