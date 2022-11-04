/*
 * Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
 */

function duplicateCount(text){
    //Outputs - number of characters that have repeats, case insensitive
    //Inputs -  a string
    //Constraints = input is always valid, uppercase, lowercase letters and numbers 0-9
    //Examples/Edge cases
    // "abcde" -> 0 since none of the characters repeat
    // "aabbcde" -> 2 since a and b repeat
    // "indivisibility" -> 1 since only i repeats 6 times

    //clean up the input so that everything is lowercase;
    let lowerText = text.toLowerCase();
    //let's create a dictionary and have the keys be the letters with the value how many times they show up.
    let counts;
    let myCharCounts = new Map();
    for(let i = 0; i < lowerText.length; i++){
        if(myCharCounts.has(lowerText[i])){
            counts = myCharCounts.get(lowerText[i]) +1;
            myCharCounts.set(lowerText[i],counts);
        }else{
            myCharCounts.set(lowerText[i],1);
        }
    }//should have dictionary of letters and how many times they show up
    let counter = 0;
    for(const [key, value] of myCharCounts){
        if(value > 1)
            counter++;
    }
    return counter;
} 
console.log(duplicateCount("indivisibility"));
console.log(duplicateCount("abba"));
console.log(duplicateCount("abcd"));