import * as fs from "fs";

const data = fs.readFileSync("input.txt", "utf8");
let dataArray: any = data.trim().split("\n");

const add = (a: number, b: number) => a + b;

const totalOverlaps = dataArray
	.map((pair: string) => {
		return pair.split(",");
	})
	.map((pair: string[]) => {
		return pair.map((item: any) => {
			return item.split("-");
		});
	})
	.map((pair: any) => {
		if (
			parseInt(pair[0][0]) <= parseInt(pair[1][0]) &&
			parseInt(pair[0][1]) >= parseInt(pair[1][1])
		) {
			return 1;
		} else if (
			parseInt(pair[1][0]) <= parseInt(pair[0][0]) &&
			parseInt(pair[1][1]) >= parseInt(pair[0][1])
		) {
			return 1;
		} else {
			return 0;
		}
	})
	.reduce(add, 0);

const overlaps = dataArray
	.map((pair: string) => {
		return pair.split(",");
	})
	.map((pair: string[]) => {
		return pair.map((item: any) => {
			return item.split("-");
		});
	})
	.map((pair: any) => {
		if (
			parseInt(pair[0][0]) <= parseInt(pair[1][0]) &&
			parseInt(pair[0][1]) >= parseInt(pair[1][1])
		) {
			return 1;
		} else if (
			parseInt(pair[1][0]) <= parseInt(pair[0][0]) &&
			parseInt(pair[1][1]) >= parseInt(pair[0][1])
		) {
			return 1;
		} else if (
			parseInt(pair[0][0]) <= parseInt(pair[1][0]) &&
			parseInt(pair[0][1]) <= parseInt(pair[1][1]) &&
			parseInt(pair[0][1]) >= parseInt(pair[1][0])
		) {
			return 1;
		} else if (
			parseInt(pair[1][0]) <= parseInt(pair[0][0]) &&
			parseInt(pair[1][1]) <= parseInt(pair[0][1]) &&
			parseInt(pair[1][1]) >= parseInt(pair[0][0])
		) {
			return 1;
		} else {
			return 0;
		}
	})
	.reduce(add, 0);

console.log(totalOverlaps);
console.log(overlaps);
