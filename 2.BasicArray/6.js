/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let result = []
    for(let i=0; i<arr.length; i++){
        if(fn(arr[i],i)){
            result.push(arr[i])
        }
    }
    return result
};

// Driven code
const arr = [1, 2, 3, 4, 5];
const fn = (num) => num % 2 === 0;
const result = filter(arr, fn);
console.log(result)