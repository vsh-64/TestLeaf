/**
 * This method requires browser name as input and based on the browser name , the corresponding statement will be printed on the console
 * @param {*} bowserName 
 * @returns String
 */
function launchBrowser(bowserName) {
  if (bowserName === "chrome")  // input string is compared with expected value  
    console.log('In chrome  browser');
  else if (bowserName === "firefox")
    console.log('In firefox  browser');
  else if (bowserName === "opera")
    console.log('In opera  browser');
  else
    console.log("invalid browser");
}

/**
 * This method requires testing type as input and based on the test , the corresponding statement will be printed on the console
 * @param {*} testType 
 * @returns String
 */
function runTest(testType) {
  switch (testType) {     // based on the input value , the respective case will get executed 
    case "Regression":
      console.log("In regression testing");
      break;
    case "Functional":
      console.log("In Functional testing");
      break;
    case "Sanity":
      console.log("In Sanity testing");
      break;
    default:
      console.log("invlaid input");
      break;
  }
}

launchBrowser("opera");
runTest("Regression");