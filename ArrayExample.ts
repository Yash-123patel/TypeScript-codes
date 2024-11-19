//String Type Array
let arr:string[]=["Yash"];
arr.push("munna");
arr.push("patel");

for(let a of arr){
    console.log(a);
}

// ReadOnly Array
let num:readonly number[]=[1,2,3,4,5];
console.log(num);

//Type Inference
let height=[1,2,3,4]
console.log(height);