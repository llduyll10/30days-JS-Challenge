/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {

    return async function(...args) {
        return new Promise((resolve, reject) => {
            let timer = setTimeout(() => {
                clearTimeout(timer)
                reject("Time Limit Exceeded")
            }, t)

            fn(...args)
                .then((result) => {
                    clearTimeout(timer)
                    resolve(result)
                })
                .catch((err) => {
                    clearTimeout(timer)
                    reject(err)
                })
        })
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */

// Driver code
fn = async (a, b) => {
    await new Promise(res => setTimeout(res, 120));
    return a + b;
  }
inputs = [5,10]
t = 150

timeLimit(fn, t)(...inputs) // () ()
    .then(console.log)