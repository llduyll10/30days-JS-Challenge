/**
 * @return {Function}
 */
var createHelloWorld = function() {

    return function(...args) {
        return  console.log("Hello World");
    }
};
const f = createHelloWorld();
f()
/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */