//named parameter function
function getObjectValues(_a) {
    var name = _a.name, age = _a.age;
    console.log(name);
    console.log(age);
}
var obj = { name: "Yash", age: 20 };
console.log(getObjectValues(obj));
//rest parameter function
function sumOfNNumbers() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    return num[0];
}
