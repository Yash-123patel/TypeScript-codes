interface Shape{
    height:number;
    width:number;

    getArea:()=>number;
}

class Rectangle implements Shape{
    public constructor(public height:number,public width:number){
        this.height=height;
        this.width=width;
    }
    public getArea():number{
        return this.height*this.width;
    }
}

const rectangle=new Rectangle(10,12);
console.log("Area of Rectangle is: "+rectangle.getArea());