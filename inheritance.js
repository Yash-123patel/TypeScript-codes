var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Mycar = /** @class */ (function () {
    function Mycar(carName, carModel, carMilege, year) {
        this.carName = carName;
        this.carModel = carModel;
        this.carMilege = carMilege;
        this.year = year;
        this.carName = carName;
        this.carModel = carModel;
        this.carMilege = carMilege;
        this.year = year;
    }
    Mycar.prototype.toString = function () {
        return "car Name is: ".concat(this.carName, " car Model is: ").concat(this.carModel, " car milege is: ").concat(this.carMilege, " introduced year is: ").concat(this.year);
    };
    return Mycar;
}());
var Fortuner = /** @class */ (function (_super) {
    __extends(Fortuner, _super);
    function Fortuner(carModel, carMilege, year) {
        var _this = _super.call(this, "Fortuner", carModel, carMilege, year) || this;
        _this.carName = "Fortuner";
        _this.carModel = carModel;
        _this.carMilege = carMilege;
        _this.year = year;
        return _this;
    }
    return Fortuner;
}(Mycar));
var fortuner = new Fortuner("zx", 12, 2009);
console.log(fortuner.toString());
