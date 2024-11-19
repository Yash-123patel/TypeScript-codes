import { visitFunctionBody } from "typescript";

type carName=string;
type carModel=string;
type carMilege=number;

function getCarinfo(name:carName,model:carModel,milege:carMilege):void{
    console.log(name);
    console.log(model);
    console.log(milege);
}

getCarinfo("Scorpio","s11",25);