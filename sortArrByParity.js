var sortArrayByParity = function(nums) {
    let evens = nums.filter(elem => elem%2===0);
    let odds = nums.filter(elem => elem%2===1);
    return evens.concat(odds);
};

let nums = [3,1,2,4];
console.log(sortArrayByParity(nums));