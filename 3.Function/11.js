/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let catched = {}
    return function(...args) {
        let key = JSON.stringify(args)
        let result

        if(key in catched){
            return catched[key]
        }
        result = fn(...args)
        catched[key] = result
        return result
    }
}


// Driver code
let callCount = 0
let memoizedFn = memoize(function(a, b) {
    callCount += 1
    return a + b
})
console.log(memoizedFn(2, 3)) // 5
console.log(memoizedFn(2, 3)) // 5
console.log(callCount) // 1

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */