/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {

    return function(x) {
        return functions.reduceRight((acc, fn) => fn(acc), x)
        // let result = x
        // for(let i = functions.length -1 ; i >=0; i--){
        //     result = functions[i](result)
        // }
        // return result
    }
};

// Driven code
const fn = compose([x => x + 1, x => 2 * x])
let res = fn(4) // 9
console.log('res',res)
/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */