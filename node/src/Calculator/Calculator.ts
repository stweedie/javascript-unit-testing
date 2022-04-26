import { CalculatorError } from "./CalculatorError";

export class Calculator {
	add(x, y) {
		// how should we handle non "number" types?
		// null, undefined, "1", objects, etc

		const xAsNumber = Calculator.parseNumber("x", x);
		const yAsNumber = Calculator.parseNumber("y", y);
		return xAsNumber + yAsNumber;
	}

	// throws CalculatorError if invalid
	static parseNumber(name: string, value: any): number | never {
		if (value === undefined || value === null) throw new CalculatorError(name, value);
		if (typeof value !== "string" && typeof value !== "number") throw new CalculatorError(name, value);

		const valueAsNumber = typeof value === "number" ? value : Number(value);
		if (isNaN(valueAsNumber)) throw new CalculatorError(name, value);

		return valueAsNumber;
	}
}
