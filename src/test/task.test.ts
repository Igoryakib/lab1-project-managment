import { describe, it, expect } from "vitest";
import { getSensorStatus } from "../js/task.js";

describe("Бізнес-логіка: getSensorStatus (Стан мікроклімату)", () => {
	it("повертає NORMAL, якщо температура в межах норми", () => {
		expect(getSensorStatus(22, 18, 26)).toBe("NORMAL");
	});

	it("повертає TOO_LOW, якщо показник впав нижче мінімуму", () => {
		expect(getSensorStatus(15, 18, 26)).toBe("TOO_LOW");
	});

	it("повертає TOO_HIGH, якщо показник перевищив максимум", () => {
		expect(getSensorStatus(30, 18, 26)).toBe("TOO_HIGH");
	});

	it("повертає ERROR, якщо датчик не передав дані (null)", () => {
		expect(getSensorStatus(null, 18, 26)).toBe("ERROR");
	});
});
