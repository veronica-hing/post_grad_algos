function moveZeros(arr) {
    //write an algorithm that takes an array and moves all the zeros to the end, preserving the order of the other elements
    //Outputs, an array with all the zeros moved to the end
    //Inputs, an array with items in it
    //Constraints, none we're aware of. Can mutate array or no?
    //examples?
    //create a new array with NO zeros, use filter method
    const noZeros = arr.filter(a=>a!==0);
    //compare the lengths of the input and our nozeros array to see how many we need to pad at the end
    let zeroArr = new Array(arr.length - noZeros.length).fill(0);
    //we have the array with stuff, and the zeros
    return noZeros.concat(zeroArr);
}
const myArr = [false,1,'0',1,2,0,1,3,"a"];
console.log(moveZeros(myArr))