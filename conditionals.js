
// TODO: Create a variable called score and give it a value between 0 and 100
const score = 100

// TODO: Create a variable called passingGrade and set it to 60
const passingGrade = 60;

// TODO: Write an if statement to check if score is greater than or equal to passingGrade
if (score == 100 ) {
    console.log("Passed")
}

// TODO: Add an else statement for when the score is below passingGrade
if ( score >= passingGrade) {
    console.log("Passed") ;

} else {
    console.log("Failed") ;
} 

// TODO: Print "Passed" or "Failed" based on the score
if (score >= passingGrade){
    console.log("Passed") ;

} else {
    console.log("Failed") ;
}

// TODO: Add another condition to check if the score is perfect (100)
if ( score=== 100){
    console.log("Perfect") ;
} else if (score>= passingGrade){
    console.log("Passed") ;
} else {
    console.log("Failed")
}
