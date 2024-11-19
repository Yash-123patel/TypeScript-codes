var Rectangle = /** @class */ (function () {
    function Rectangle(height, width) {
        this.height = height;
        this.width = width;
        this.height = height;
        this.width = width;
    }
    Rectangle.prototype.getArea = function () {
        return this.height * this.width;
    };
    return Rectangle;
}());
var rectangle = new Rectangle(10, 12);
console.log(rectangle.getArea());
