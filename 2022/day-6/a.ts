import * as fs from "fs";

const data = fs.readFileSync("input.txt", "utf8");
const dataStream = data.trim()

const MESSAGE_LENGTH = 14;

function uniqueCharacters(str: string) {
    let arr = str.split("");
    return !arr.some((v: string, i: number) => arr.indexOf(v) < i);
}

for(let i = 0; i < dataStream.length; i++) {
    const possibleMessage = dataStream.slice(i , i + MESSAGE_LENGTH)
    if(uniqueCharacters(possibleMessage)) {
        console.log(possibleMessage)
        console.log(dataStream.indexOf(possibleMessage) + MESSAGE_LENGTH)
        break;
    }
}
