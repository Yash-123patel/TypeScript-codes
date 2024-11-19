var EmployeeIpl = /** @class */ (function () {
    function EmployeeIpl(employeeName, employeeId, companyName, companyAddress, employeeSalary) {
        this.employeeName = employeeName;
        this.employeeId = employeeId;
        this.companyName = companyName;
        this.companyAddress = companyAddress;
        this.employeeSalary = employeeSalary;
    }
    EmployeeIpl.prototype.toString = function () {
        return " Employee Name : ".concat(this.employeeName, " \n Employee Id: ").concat(this.employeeId, " \n Company Name: ").concat(this.companyName, " \n Company Address ").concat(this.companyAddress, "  \n Employee Salary: ").concat(this.employeeSalary);
    };
    return EmployeeIpl;
}());
var emp = new EmployeeIpl("Yash Patel", 12100022, "Tekworks", "Vijaywada", 0.0);
console.log(emp.toString());
