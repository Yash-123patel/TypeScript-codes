//function with return type and without parameter
function getNumber() {
    return 20;
}
console.log(getNumber());
//function with return type and parameters
function sum(a, b) {
    return a + b;
}
console.log(sum(10, 20));
//funtion with return type void and parameter
function printUserMessage(str) {
    console.log(str);
}
printUserMessage("Hello My Name is Yash Patel");
//function with return type void and noParameter
function printNumbers() {
    for (var i = 1; i <= 10; i++) {
        console.log(i);
    }
}
printNumbers();
//function with optional parameters
function findMax(a, b, c) {
    var max = a;
    if (a > b && a > (c || 0))
        max = a;
    else if (b > a && b > (c || 0))
        max = b;
    return max;
}
console.log("Max number is: " + findMax(9, 9));
//function with Default parameters
function findMin(a, b, c) {
    if (c === void 0) { c = 10; }
    var max = 0;
    if (a < b && a < (c || 0))
        max = a;
    else if (b < a && b < (c || 0))
        max = b;
    else
        max = c || 0;
    return max;
}
console.log("minimum number is: " + findMin(3, 2));
