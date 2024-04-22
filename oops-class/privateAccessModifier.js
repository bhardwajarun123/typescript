var Fruit = /** @class */ (function () {
    function Fruit() {
        this.name = "";
    }
    Fruit.prototype.setName = function (name) {
        this.name = name;
    };
    Fruit.prototype.displayName = function () {
        console.log(this.name);
    };
    return Fruit;
}());
var f1 = new Fruit();
f1.setName("apple");
f1.displayName();
f1.name = "mango";
f1.displayName();
