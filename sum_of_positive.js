function positiveSum(arr) {
    //given array of numbers as input
    //expected output is sum
    let mySum = 0;
    let sumPositives = arr.reduce((prevVal, curVal) => {
        if(curVal>0)
            return curVal+prevVal;
        else
            return prevVal;
    }, mySum)
    return sumPositives;
}

const myArr = [1,2,3,4];//returns 10
const myOtherArr = [1,2,3,-4];//returns 6

console.log(positiveSum(myArr));
console.log(positiveSum(myOtherArr));