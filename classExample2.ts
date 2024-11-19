type Name=string;
type Id=number;
type CompanyName=string;
type CompanyAddress=string;
type salary=number;

interface Employee{
    employeeName:Name;
    employeeId:Id;
    companyName:CompanyName;
    companyAddress:CompanyAddress;
    employeeSalary:salary;
}

class EmployeeIpl implements Employee{

    constructor(public employeeName:Name,public employeeId:Id,public companyName:CompanyName,public companyAddress:CompanyAddress,public employeeSalary:salary){}

    public toString():string{
        return ` Employee Name : ${this.employeeName} \n Employee Id: ${this.employeeId} \n Company Name: ${this.companyName} \n Company Address ${this.companyAddress}  \n Employee Salary: ${this.employeeSalary}`
    }
}

const emp=new EmployeeIpl("Yash Patel",12100022,"Tekworks","Vijaywada",0.0);
console.log(emp.toString());