
const { Rectangle, Triangle, Circle } = require("../src/shape");


describe('Rectangle', () => {
    test('Code should throw an error for non-positive parameters', () => {
        expect(() => new Rectangle(-5, 8)).toThrow('Length and width must be positive numbers');
        expect(() => new Rectangle(5, -8)).toThrow('Length and width must be positive numbers');
        expect(() => new Rectangle(0, 8)).toThrow('Length and width must be positive numbers');
        expect(() => new Rectangle(5, 0)).toThrow('Length and width must be positive numbers');
    });

    test('calculateArea should return the correct value for positive parameters', () => {
        const rectangle = new Rectangle(5, 8);
        expect(rectangle.area()).toBe(40);
    });

    test('calculateCircumference should return the correct value for positive parameters', () => {
        const rectangle = new Rectangle(5, 8);
        expect(rectangle.circumference()).toBe(26);
    });
});


describe('Triangle', () => {
    test(' non-positive parameters', () => {
        expect(() => new Triangle(-3, 4, 5, 5, 4)).toThrow('All dimensions must be positive numbers');
        expect(() => new Triangle(3, -4, 5, 5, 4)).toThrow('All dimensions must be positive numbers');
        expect(() => new Triangle(3, 4, -5, 5, 4)).toThrow('All dimensions must be positive numbers');
        expect(() => new Triangle(3, 4, 5, -5, 4)).toThrow('All dimensions must be positive numbers');
        expect(() => new Triangle(3, 4, 5, 5, -4)).toThrow('All dimensions must be positive numbers');
        expect(() => new Triangle(0, 4, 5, 5, 4)).toThrow('All dimensions must be positive numbers');
    });

    test('calculateArea should return the correct value for positive parameters', () => {
        const triangle = new Triangle(3, 4, 5, 5, 4);
        expect(triangle.area()).toBe(6);
    });

    test('calculateCircumference should return the correct value for positive parameters', () => {
        const triangle = new Triangle(3, 4, 5, 5, 4);
        expect(triangle.circumference()).toBe(14);
    });
});


describe('Circle',()=>{
    test('circle will not created with negative radius',()=>{
        expect(()=> new Circle(-5)).toThrow('Circle can not create with negative radius.')
    })
})
