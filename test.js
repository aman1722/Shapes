const { Rectangle } = require("./Shapes");


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
});