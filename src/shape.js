class Rectangle{
    constructor(length, width) {
        this.validatePositiveNumber(length);
        this.validatePositiveNumber(width);
        this.length = length;
        this.width = width;
    }

    // validate  
    validatePositiveNumber(number) {
        if (typeof number !== 'number' || number <= 0) {
            throw new Error(`Length and width must be positive numbers`);
        }
    }

    //Calculating area 
    area() {
        return this.length * this.width;
    }

    //Calculating circumference 
    circumference() {
        return 2 * (this.length + this.width);
    }
}

class Triangle {
    constructor(base, height, side1, side2, side3) {
        this.validatePositiveNumber(base);
        this.validatePositiveNumber(height);
        this.validatePositiveNumber(side1);
        this.validatePositiveNumber(side2);
        this.validatePositiveNumber(side3);

        this.base = base;
        this.height = height;
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    validatePositiveNumber(number) {
        if (typeof number !== 'number' || number <= 0) {
            throw new Error(`All dimensions must be positive numbers`);
        }
    }

    area() {
        return 0.5 * this.base * this.height;
    }

    circumference() {
        return this.side1 + this.side2 + this.side3;
    }
}


class Circle{
    constructor(radius){
       this.validatePositiveNumber(radius);
       this.radius = radius;
    }

    area() {
        return Math.floor(Math.PI * Math.pow(this.radius, 2));
    }

    validatePositiveNumber(number){
        if (typeof number !== 'number' || number <= 0) {
            throw new Error(`Circle can not create with negative radius.`);
        } 
    }
}

module.exports={
    Rectangle,
    Triangle,
    Circle
}