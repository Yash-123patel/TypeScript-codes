function getNumber():number{
    return Math.random();
}
console.log(getNumber());

//optional parameter
function getSum(a:number,b:number,c?:number):number{
    console.log(typeof a);
    console.log(typeof b);
    console.log(typeof c)
    return a+b+(c||0);
}

console.log(getSum(10,20));

//default value assign to parameter
function getDefaultSum(a:number,b:number=10):any{
    return a+b;
}
console.log(getDefaultSum(1));