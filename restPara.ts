//rest parameter function
function sumOfNNumbers(...num:number[]):number{
    return num.reduce((sum,curr)=>(sum + curr));
}

console.log(sumOfNNumbers(1,2,3,4,5,6,7,8,9,10));