function betterThanAverage(classPoints, yourPoints) {
    // Output, true if yourPoints are higher then classpoint average, else, false
    // input, classPoints array that DOES NOT include your score, yourPoints which is your score
    // constraints, more like a note, you must include yourPoints in the class average calculation
    // example: betterThanAverage([2,3], 5) -> true
    let totalPoints = classPoints.reduce((prevVal, curVal)=>{return prevVal+curVal}, 0) + yourPoints;
    let avgPoints = totalPoints/(classPoints.length + 1);
    return yourPoints > avgPoints;
}

let testy = [2,3,5];
console.log(betterThanAverage(testy,5));
