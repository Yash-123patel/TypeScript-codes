//number enum with default values 
enum DaysNumber{
    SUNDAY,
    MONDAY,
    TUESDAY=1,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATAURDAYS

}

console.log("Monday number is: "+DaysNumber.MONDAY);
console.log("Friday number is: "+DaysNumber.FRIDAY);

//number enum with explicit assign values
enum MonthsNumber{
   JAN=1,
   FEB=2,
   MARCH=3,
   APRIL=4,
   MAY=5,
   JUNE=6,
   JULY=7,
   AUG=8,
   SEP=9,
   OCT=10,
   NOV=11,
   DEC=12

}
console.log("Feb number is: "+MonthsNumber.FEB);
console.log("July number is: "+MonthsNumber.JULY);


//String enum

enum Directions{
    NORTH="north",
    SOUTH="south",
    EAST="east",
    WEST="west"
}

console.log(Directions.NORTH);
console.log(Directions.SOUTH);
console.log(Directions.EAST);
console.log(Directions.WEST);
