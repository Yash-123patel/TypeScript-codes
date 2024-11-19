//function with return type and without parameter
function getNumber():number{
    return 20;
}
console.log(getNumber());

//function with return type and parameters
function sum(a:number,b:number):number{
    return a+b;
}

console.log(sum(10,20));

//funtion with return type void and parameter
function printUserMessage(str:string):void{
    console.log(str);
}
printUserMessage("Hello My Name is Yash Patel");

//function with return type void and noParameter
function printNumbers():void{
    for(let i:number=1;i<=10;i++){
        console.log(i);
    }
}
printNumbers();


//function with optional parameters
function findMax(a:number,b:number,c?:number):number{
    let max:number=a;
    if(a>b&&a>(c||0))
        max=a;
    
    else if(b>a && b>(c||0))
        max=b;

    return max;
}

console.log("Max number is: "+findMax(9,9));

//function with Default parameters
function findMin(a:number,b:number,c:number=10):number{
    let max:number=0;
    if(a<b&&a<(c||0))
        max=a;
    
    else if(b<a && b<(c||0))
        max=b;
    else
       max=c||0;

    return max;
}

console.log("minimum number is: "+findMin(3,2));

