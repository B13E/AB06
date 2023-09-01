const { test } = require("ramda");
const { sum, minus, multypli, divide, devide, } = require("./math");

test("sum add two numbers", () => {
    const result = sum(20, 30);
    const expected = 50;
    expect(result).toBe(expected);
});

test("Subtraktion two numbers", () => {
    const result = minus(100, 50);
    const expected = 50;
    expect(result).toBe(expected);
});

test("multiply two numbers", () => {
    const result = multiply(1, 50);
    const expected = 50;
    expect(result).toBe(expected);
});

test("devide two numbers", () => {
    const result = devide(100, 2);
    const expected = 50;
    expect(result).toBe(expected);
});

/*
test("sum add two numbers", () => {
    const result = sum(20,30);
    const expected = 50;
    expect(result).toBe(expected);
});
*/
