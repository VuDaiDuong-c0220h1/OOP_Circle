let Circle = function (radius, color) {
    this.radius = radius;
    this.color = color;

    this.getRadius = function () {
        return radius;
    };
    this.getArea = function () {
        return Math.PI * radius * radius;
    };
};

let circle = new Circle(2, "red");
let radius = circle.getRadius();
let area = circle.getArea();

alert("raidus: " + radius + " area: " + area);