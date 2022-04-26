export class CalculatorError extends Error {
	constructor(
		public parameter: string,
		public value: any) {
		super(`Expected parameter '${parameter}' to be of type Number or String that can be converted to a Number, but received ${value}`);
	}
}
