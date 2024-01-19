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


module.exports={
    Rectangle
}