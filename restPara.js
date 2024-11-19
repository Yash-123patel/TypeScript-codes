//rest parameter function
function sumOfNNumbers() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    return num.reduce(function (sum, curr) { return (sum + curr); });
}
console.log(sumOfNNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
