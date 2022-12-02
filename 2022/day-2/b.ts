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

const DESIRED_OUTCOME: any = {
	X: "lose",
	Y: "draw",
	Z: "win",
};

const WIN_CONDITIONS: any = {
	A: {
		X: 3,
		Y: 1,
		Z: 2,
	},
	B: {
		X: 1,
		Y: 2,
		Z: 3,
	},
	C: {
		X: 2,
		Y: 3,
		Z: 1,
	},
};

const main = (dataArray: any) => {
	const result = dataArray
		.map((game: any) => [game[1], WIN_CONDITIONS[game[0]][game[1]]])
		.map(
			(result: any) =>
				RESULT_POINTS[DESIRED_OUTCOME[result[0]]] + result[1]
		)
		.reduce(add, 0);

	console.log(result);
};

main(dataArray);
