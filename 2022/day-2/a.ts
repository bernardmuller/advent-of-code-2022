import * as fs from 'fs'

const data = fs.readFileSync('input.txt', 'utf8');
let dataArray:any = data.trim().split('\n').map(str => str.split(' '))

console.log(dataArray)

const POINTS_PER_OPTION = {
    X: 1,
    Y: 2,
    Z: 3
}

const RESULT_POINTS = {
    win: 6,
    draw: 3,
    lose: 0
}

const WIN_CONDITIONS = {
    X : {
        A: "draw",
        B: "lose",
        C: "win"
    },
    Y : {
        A: "win",
        B: "draw",
        C: "lose"
    },
    Z : {
        A: "lose",
        B: "win",
        C: "draw"
    }
}

console.log(dataArray[0])
// for(const game of dataArray) {
//     console.log(game)
//     // console.log(game)
// }

// const game = (dataArray) => {
//     for(game of dataArray) {
//         console.log(WIN_CONDITIONS[game[1]])
//         // console.log(game)
//     }
// }

// game(dataArray)