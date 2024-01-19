class Rectangle{
    constructor(length, width) {
        this.validatePositiveNumber(length);
        this.validatePositiveNumber(width);
        this.length = length;
        this.width = width;
    }

    validatePositiveNumber(number) {
        if (typeof number !== 'number' || number <= 0) {
            throw new Error(`Length and width must be positive numbers`);
        }
    }
    calculateArea() {
        return this.length * this.width;
    }
    calculateCircumference() {
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

    calculateArea() {
        return 0.5 * this.base * this.height;
    }

    calculateCircumference() {
        return this.side1 + this.side2 + this.side3;
    }
}


module.exports={
    Rectangle,
    Triangle
}