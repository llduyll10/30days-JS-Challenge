/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    let timer; // Biến để lưu trữ timeout
    return function(...args) { // Trả về một hàm mới
        clearTimeout(timer); // Xóa timeout trước đó (nếu có)
        timer = setTimeout(() => fn(...args), t); // Đặt một timeout mới để gọi hàm `fn` sau `t` ms
    };
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */

// Driver code
// Driver code
const log = debounce(console.log, 150);

setTimeout(() => {
    log('Call 1:', 1, 2); // Logged at t=200ms
}, 50);

setTimeout(() => {
    log('Call 2', 3, 4); // Cancelled
}, 300);

setTimeout(() => {
    log('Call 3:', 5, 6); // Logged at t=450ms
}, 300);
