import * as fs from "fs";

const data = fs.readFileSync("input.txt", "utf8");
let dataArray: any = data.trim().split("\n");

const add = (a: number, b: number) => a + b;

const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

const answer1 = dataArray
	.map((rucksack: string) => [
		rucksack.slice(0, rucksack.length / 2),
		rucksack.slice(rucksack.length / 2, rucksack.length),
	])
	.map((compartments: string) => {
		for (const item of compartments[0]) {
			if (compartments[1].includes(item)) {
				return item;
			}
		}
	})
	.map((item: string) => alphabet.indexOf(item) + 1)
	.reduce(add, 0);

const GROUP_SIZE = 3;

let groups: string[] = [];
while (dataArray.length > 0) groups.push(dataArray.splice(0, GROUP_SIZE));

const answer2 = groups
	.map((group: any) => {
		for (const item of group[0]) {
			if (group[1].includes(item)) {
				if (group[2].includes(item)) {
					return item;
				}
			}
		}
	})
	.map((item: string) => alphabet.indexOf(item) + 1)
	.reduce(add, 0);

console.log(answer1);
console.log(answer2);
