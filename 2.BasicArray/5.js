/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let  transform = []
    for(let i=0; i<arr.length;i++){
        transform.push(fn(arr[i],i))
    }
    return transform
};

// Driven code
const arr = [1, 2, 3, 4, 5];
const fn = (num) => num * 2;
const result = map(arr, fn);
console.log(result)