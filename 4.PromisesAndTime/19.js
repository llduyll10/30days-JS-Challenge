/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        let result = new Array(functions.length)
        let count = 0

        functions.forEach((fn,i) =>{
            fn()
            .then(res =>{
                result[i] = res
                count++
                if(count === functions.length){
                    resolve(result)
                }
            })
            .catch(err => reject(err))
        })

    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */

// Driver code
functions = [
    () => new Promise(resolve => setTimeout(() => resolve(4), 50)),
    () => new Promise(resolve => setTimeout(() => resolve(10), 150)),
    () => new Promise(resolve => setTimeout(() => resolve(16), 100))
]

promiseAll(functions).then(console.log)