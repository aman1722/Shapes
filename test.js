const { Rectangle } = require("./Shapes");


describe('Rectangle', () => {
    test('calculateArea should throw an error for non-positive parameters', () => {
        expect(() => new Rectangle(-5, 8)).toThrow('Length and width must be positive numbers');
        expect(() => new Rectangle(5, -8)).toThrow('Length and width must be positive numbers');
        expect(() => new Rectangle(0, 8)).toThrow('Length and width must be positive numbers');
        expect(() => new Rectangle(5, 0)).toThrow('Length and width must be positive numbers');
    });

   
});