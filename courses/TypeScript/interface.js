//The interface is declare a class
var _this = this;
var BasicColor;
(function (BasicColor) {
    BasicColor["Red"] = "Red";
    BasicColor["Blue"] = "Blue";
})(BasicColor || (BasicColor = {}));
var rect = {
    height: 10,
    width: 5,
    color: BasicColor.Red
};
var area = function (r) { return r.width * r.height; };
var areaRect = area(rect);
console.log(areaRect);
rect.toString = function () { return "Un Rectangulo ".concat(_this.color); };
console.log(rect.toString());
