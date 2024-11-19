//named parameter function
function getObjectValues({name,age}:{name:string;age:number}):void{
    console.log(name);
    console.log(age);
}
const obj={name:"Yash",age:20}

console.log(getObjectValues(obj));


