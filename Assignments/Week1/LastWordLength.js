
// calling the function to get the length of last word in the given input 
getLengthOfLastWord("Hello World");
getLengthOfLastWord("Fly me to the moon");

/**
 * This method a requires a group of words as input and it returns the length of last word
 * @param {*} str 
 */
function getLengthOfLastWord(str){
    let words = str.trim().split(" ");  // split the words into an array
    let lastWordlength="";       
    let lastWord= words[words.length-1];  // storing the last word using array index
    lastWordlength=lastWord.length;    // getting length of last word
    console.log("last word is: "+ lastWord +" and its length is : "+lastWordlength);
}
