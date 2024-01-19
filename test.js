const { Rectangle, Triangle } = require("./Shapes");


describe('Rectangle', () => {
    test('Code should throw an error for non-positive parameters', () => {
        expect(() => new Rectangle(-5, 8)).toThrow('Length and width must be positive numbers');
        expect(() => new Rectangle(5, -8)).toThrow('Length and width must be positive numbers');
        expect(() => new Rectangle(0, 8)).toThrow('Length and width must be positive numbers');
        expect(() => new Rectangle(5, 0)).toThrow('Length and width must be positive numbers');
    });

    test('calculateArea should return the correct value for positive parameters', () => {
        const rectangle = new Rectangle(5, 8);
        expect(rectangle.calculateArea()).toBe(40);
    });

    test('calculateCircumference should return the correct value for positive parameters', () => {
        const rectangle = new Rectangle(5, 8);
        expect(rectangle.calculateCircumference()).toBe(26);
    });
});


describe('Triangle', () => {
    test('Code should throw an error for non-positive parameters', () => {
        expect(() => new Triangle(-3, 4, 5, 5, 4)).toThrow('All dimensions must be positive numbers');
        expect(() => new Triangle(3, -4, 5, 5, 4)).toThrow('All dimensions must be positive numbers');
        expect(() => new Triangle(3, 4, -5, 5, 4)).toThrow('All dimensions must be positive numbers');
        expect(() => new Triangle(3, 4, 5, -5, 4)).toThrow('All dimensions must be positive numbers');
        expect(() => new Triangle(3, 4, 5, 5, -4)).toThrow('All dimensions must be positive numbers');
        expect(() => new Triangle(0, 4, 5, 5, 4)).toThrow('All dimensions must be positive numbers');
    });

    test('calculateArea should return the correct value for positive parameters', () => {
        const triangle = new Triangle(3, 4, 5, 5, 4);
        expect(triangle.calculateArea()).toBe(6);
    });

    test('calculateCircumference should return the correct value for positive parameters', () => {
        const triangle = new Triangle(3, 4, 5, 5, 4);
        expect(triangle.calculateCircumference()).toBe(14);
    });
});
