import { Calculator } from "./Calculator";

// https://jestjs.io/docs/setup-teardown#scoping
describe("Calculator", () => {
	describe("add", () => {
		function verifyAdd(calc, a, b, result) {
			expect(calc.add(a, b)).toEqual(result);
		}

		it("1 + 2 == 3", () => verifyAdd(new Calculator(), 1, 2, 3));
		it("-1 + 0 == -1", () => verifyAdd(new Calculator(), -1, 0, -1));
    it("-1 + -1 == -2", () => verifyAdd(new Calculator(), -1, -1, -2));

		// rewrite to handle thrown exceptions
		it("'null' + 1 should throw", () => {
			expect(() => new Calculator().add(null, 1)).toThrowError();
		});
	});
});
