

/**
 * This method requires score as input and based on the conditions , it returns the grade value .
 * @param score 
 * @returns String
 */

function gradeCalc(score) {
    let grade = "";
    switch (true) {                    
        case (score > 95 && score < 100):
            grade = "A+";
            break;
        case (score > 85 && score < 95):
            grade = "A";
            break;
        case (score > 75 && score < 85):
            grade = "B+";
            break;
        case (score > 65 && score < 75):
            grade = "B";
            break;
        case (score > 55 && score < 65):
            grade = "C+";
            break;
        case (score > 45 && score < 55):
            grade = "C";
            break;
        case (score > 35 && score < 45):
            grade = "D";
            break;
        default:
            grade = "E"
            break;

    }
    return grade;
}

// print the grade value 
console.log(gradeCalc(63));