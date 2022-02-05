import numeral from "numeral";

export default function Number({ value }) {
	let number = value;
	if (typeof number === "string") {
		number = Number.parseInt(number);
	}
	if (number >= 1000) {
		number = numeral(value).format("0.0a");
	}
	return number;
}
