const checkFive = require("../checkFive.js");

describe("checkFive", function() {

    test("should expect to result less than 5 if 2 is passed in", function() {
        let output = checkFive(2);
        expect(output).toEqual("2 is less than 5.");
    })

    test("should expect to result greater than 5 if 7 is passed in", function() {
        let output = checkFive(7);
        expect(output).toEqual("7 is greater than 5.");
    })

    test("should expect result to be equivalent if 5 is passed in", function() {
        let output = checkFive(5);
        expect(output).toEqual("5 is equal to 5.");
    })

})