type carName=string;
type carModel=string;
type milege=number;
type year=number;

interface Car{
    carName:carName;
    carModel:carModel;
    carMilege:milege;
    year:year;

    toString:()=>string;

}

class Mycar implements Car{

    constructor(public carName:carName,public carModel:carModel,public carMilege:milege,public year:year){
        this.carName=carName;
        this.carModel=carModel;
        this.carMilege=carMilege;
        this.year=year;
    }

    public toString():string{
        return `car Name is: ${this.carName} car Model is: ${this.carModel} car milege is: ${this.carMilege} introduced year is: ${this.year}`;
    }
}

class Fortuner extends Mycar{
    constructor( carModel:carModel, carMilege:milege, year:year){
        super("Fortuner",carModel,carMilege,year);
        this.carName="Fortuner";
        this.carModel=carModel;
        this.carMilege=carMilege;
        this.year=year;
    }


}

const fortuner=new Fortuner("zx",12,2009);
console.log(fortuner.toString())