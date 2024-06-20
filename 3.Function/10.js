/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let result
    let isCalled = false
    return function(...args){
        if(!isCalled){
            result = fn(...args)
            isCalled = true
            return result
        }
        return undefined
    }
};

// Driver code
let fn = (a,b,c) => (a + b + c)
let onceFn = once(fn)

let res1=  onceFn(1,2,3) // 6
let res2 = onceFn(2,3,6) // returns undefined without calling fn
console.log(res1)
console.log(res2)
/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
