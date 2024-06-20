/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let res = init
    for(let i=0; i<nums.length; i++){
        res = fn(res, nums[i])
    }
    return res
};

// Driven code
const arr = [1, 2, 3, 4, 5];
const fn = (acc, val) => acc + val;
const init = 0;
const result = reduce(arr, fn, init);
console.log(result)