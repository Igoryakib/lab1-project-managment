export function getSensorStatus(
	currentValue: number | null | undefined,
	minThreshold: number,
	maxThreshold: number
): string {
	if (currentValue === undefined || currentValue === null) return "ERROR";
	if (currentValue < minThreshold) return "TOO_LOW";
	if (currentValue > maxThreshold) return "TOO_HIGH";
	return "NORMAL";
}
