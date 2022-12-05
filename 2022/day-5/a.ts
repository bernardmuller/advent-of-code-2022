import * as fs from "fs";

const data = fs.readFileSync("input.txt", "utf8");
let instructions: any = data
	.trim()
	.split("\n")
	.map((line) => {
		const newLine = line.split(" ");
		return [newLine[1], newLine[3], newLine[5]];
	});

const example = ["ZN", "MCD", "P"];
const input = [
	"DTWFJSHN",
	"HRPQTNBG",
	"LQV",
	"NBSWRQ",
	"NDFTVMB",
	"MDBVHTR",
	"DBQJ",
	"DNJVRZHQ",
	"BNHMS",
];

let crates = input;
console.log("initial crates", crates);
for (const instruction of instructions) {
	const amount = parseInt(instruction[0]);
	const start = parseInt(instruction[1]) - 1;
	const end = parseInt(instruction[2]) - 1;

	let move = crates[start].slice(crates[start].length - amount);
	// comment out the next line to use cratemover 9001 :)
	move = move.split("").reverse().join("");
	crates[start] = crates[start].slice(0, crates[start].length - amount);
	crates[end] = crates[end] + move;
}

const output = crates
	.map((crate) => crate[crate.length - 1])
	.reduce((a, b) => a + b, "");

console.log("end ", output);
