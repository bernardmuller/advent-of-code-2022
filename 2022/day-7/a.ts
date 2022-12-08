import * as fs from "fs";

const data = fs.readFileSync("input.txt", "utf8");
const input = data.split('\n')

const add = (a, b) => a + b

type Directory = {
    parent?: Directory;
    files: { [name: string]: number };
    dirs: { [name: string]: Directory };
};

const fileStructure: Directory = { files: {}, dirs: {} };

let current = fileStructure;

for (const command of input) {
    const [cmd, ...rest] = command.split(" ");
    if(cmd !== 'dir') {
        current.files[rest[0]] = parseInt(cmd);
    }
    if (cmd === "$") {
        if (rest[0] === "cd") {
            const dir = rest[1];
            if (dir === "..") {
                current = current.parent!;
            } else if (dir === "/") {
                current = fileStructure;
            } else {
                if (!current.dirs[dir]) {
                    current.dirs[dir] = {parent: current, files: {}, dirs: {}};
                }
                current = current.dirs[dir];
            }
        }
    }
}

const dirSizes: number[] = [];
const calculateFileSize = (curr: Directory): number => {
    let size = 0;
    for (const file in curr.files) {
        size += curr.files[file];
    }
    for (const dir in curr.dirs) {
        const dirSize = calculateFileSize(curr.dirs[dir]);
        size += dirSize;
        dirSizes.push(dirSize);
    }
    return size;
};

const rootSize = calculateFileSize(fileStructure);

const part1 = dirSizes
    .filter((x) => x <= 100000)
    .reduce(add, 0);

const part2 = Math.min(
    ...dirSizes.filter((x) => x >= 30000000 - (70000000 - rootSize))
);

console.log(part1);
console.log(part2);

// thanks Theo :)