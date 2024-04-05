//Calling this method to check the two input strings are anagrams
isAnagram("listen","silent")

/**
 * This method requires two input strings and its verifies the strings agit re anagram or not 
 * @param {*} str1 
 * @param {*} str2 
 */
function isAnagram(str1,str2){
      
let sortedStr1 = str1.trim().split("").sort().join("").toLowerCase(); // Split the string into an array and sort the array then convert it to string 
let sortedStr2 = str2.trim().split("").sort().join("").toLowerCase(); 

if(sortedStr1===sortedStr2)                    // compare the 2 sorted strings
console.log("Both "+str1+ " and " +str2+ " are anagrams");
else 
console.log("Both "+str1+ " and " +str2+ " are not anagrams")
}

