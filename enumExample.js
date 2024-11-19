//number enum with default values 
var DaysNumber;
(function (DaysNumber) {
    DaysNumber[DaysNumber["SUNDAY"] = 0] = "SUNDAY";
    DaysNumber[DaysNumber["MONDAY"] = 1] = "MONDAY";
    DaysNumber[DaysNumber["TUESDAY"] = 1] = "TUESDAY";
    DaysNumber[DaysNumber["WEDNESDAY"] = 2] = "WEDNESDAY";
    DaysNumber[DaysNumber["THURSDAY"] = 3] = "THURSDAY";
    DaysNumber[DaysNumber["FRIDAY"] = 4] = "FRIDAY";
    DaysNumber[DaysNumber["SATAURDAYS"] = 5] = "SATAURDAYS";
})(DaysNumber || (DaysNumber = {}));
console.log("Monday number is: " + DaysNumber.MONDAY);
console.log("Friday number is: " + DaysNumber.FRIDAY);
//number enum with explicit assign values
var MonthsNumber;
(function (MonthsNumber) {
    MonthsNumber[MonthsNumber["JAN"] = 1] = "JAN";
    MonthsNumber[MonthsNumber["FEB"] = 2] = "FEB";
    MonthsNumber[MonthsNumber["MARCH"] = 3] = "MARCH";
    MonthsNumber[MonthsNumber["APRIL"] = 4] = "APRIL";
    MonthsNumber[MonthsNumber["MAY"] = 5] = "MAY";
    MonthsNumber[MonthsNumber["JUNE"] = 6] = "JUNE";
    MonthsNumber[MonthsNumber["JULY"] = 7] = "JULY";
    MonthsNumber[MonthsNumber["AUG"] = 8] = "AUG";
    MonthsNumber[MonthsNumber["SEP"] = 9] = "SEP";
    MonthsNumber[MonthsNumber["OCT"] = 10] = "OCT";
    MonthsNumber[MonthsNumber["NOV"] = 11] = "NOV";
    MonthsNumber[MonthsNumber["DEC"] = 12] = "DEC";
})(MonthsNumber || (MonthsNumber = {}));
console.log("Feb number is: " + MonthsNumber.FEB);
console.log("July number is: " + MonthsNumber.JULY);
//String enum
var Directions;
(function (Directions) {
    Directions["NORTH"] = "north";
    Directions["SOUTH"] = "south";
    Directions["EAST"] = "east";
    Directions["WEST"] = "west";
})(Directions || (Directions = {}));
console.log(Directions.NORTH);
console.log(Directions.SOUTH);
console.log(Directions.EAST);
console.log(Directions.WEST);
