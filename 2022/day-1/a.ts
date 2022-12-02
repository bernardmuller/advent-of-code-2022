import fs from 'fs';

const data = fs.readFileSync('input.txt', 'utf8');

const splitDataIntoArray = (data: string) => {
    return data.split('\n')
}

const dataArray = splitDataIntoArray(data)

const sumDataAndParseToArray = (dataArray: string[]) => {
    let parsed: number[] = []
    let temp: number[] = []
    for(let i = 0; i <= dataArray.length; i++) {
        if(dataArray[i] !== '\r') {
            temp.push(parseInt(dataArray[i]))
        } else {
            let total = 0
            for(const calorie of temp) {
                total += calorie
            }

            parsed.push(total)
            temp = []
        }
    }
    return parsed
}

const getMaxNumberInArray = (array: number[]) => {
    return Math.max.apply(null, array);
}

const calculateTopThreeTotal = (array: number[]) => {
    const topThree = array.sort((a, b) => {return b - a}).slice(0, 3)
    const topThreeTotal = topThree.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
    );
    return topThreeTotal
}

const parsedData = sumDataAndParseToArray(dataArray)

console.log(`The elf with the most snacks has ${getMaxNumberInArray(parsedData)} calories of snacks.`)
console.log(`The top 3 elves wit the most snacks has ${calculateTopThreeTotal(parsedData)} calories of snacks.`)