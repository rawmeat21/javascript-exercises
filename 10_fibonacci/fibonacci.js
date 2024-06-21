function fibonacci(num) {
    if(num<0) return 'OOPS';
    let x = 1;
    let y = 1;

    for (let i = 2; i <= num; ++i) {
        y = x + y;
        x = y - x;
    }
    return x;
}
fibonacci(5);
// Do not edit below this line
module.exports = fibonacci;
//1 1 2 3 5 8