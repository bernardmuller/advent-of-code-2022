import * as fs from "fs";

const data = fs.readFileSync("input.txt", "utf8");
let dataArray: any = data
	.trim()
	.split("\n")
	.map((str) => str.split(" "));
// console.log(dataArray);

const add = (a: number, b: number) => a + b;

const POINTS_PER_OPTION: any = {
	X: 1,
	Y: 2,
	Z: 3,
};

const RESULT_POINTS: any = {
	win: 6,
	draw: 3,
	lose: 0,
};

const WIN_CONDITIONS: any = {
	X: {
		A: "draw",
		B: "lose",
		C: "win",
	},
	Y: {
		A: "win",
		B: "draw",
		C: "lose",
	},
	Z: {
		A: "lose",
		B: "win",
		C: "draw",
	},
};

const main = (dataArray: any) => {
	const result = dataArray
		.map((game: any) => [game[1], WIN_CONDITIONS[game[1]][game[0]]])
		.map(
			(result: any) =>
				POINTS_PER_OPTION[result[0]] + RESULT_POINTS[result[1]]
		)
		.reduce(add, 0);

	console.log(result);
};

main(dataArray);
