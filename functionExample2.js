function getNumber() {
    return Math.random();
}
console.log(getNumber());
//optional parameter
function getSum(a, b, c) {
    console.log(typeof a);
    console.log(typeof b);
    console.log(typeof c);
    return a + b + (c || 0);
}
console.log(getSum(10, 20));
function getDefaultSum(a, b) {
    if (b === void 0) { b = 10; }
    return a + b;
}
console.log(getDefaultSum(1));
