class Rectangle{
    constructor(length, width) {
        this.validatePositiveNumber(length, 'Length');
        this.validatePositiveNumber(width, 'Width');
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
}


module.exports={
    Rectangle
}