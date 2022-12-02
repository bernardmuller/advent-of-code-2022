"use strict";
exports.__esModule = true;
var fs = require("fs");
var data = fs.readFileSync('input.txt', 'utf8');
var dataArray = data.trim().split('\n').map(function (str) { return str.split(' '); });
console.log(dataArray);
var POINTS_PER_OPTION = {
    X: 1,
    Y: 2,
    Z: 3
};
var RESULT_POINTS = {
    win: 6,
    draw: 3,
    lose: 0
};
var WIN_CONDITIONS = {
    X: {
        A: "draw",
        B: "lose",
        C: "win"
    },
    Y: {
        A: "win",
        B: "draw",
        C: "lose"
    },
    Z: {
        A: "lose",
        B: "win",
        C: "draw"
    }
};
for (var _i = 0, dataArray_1 = dataArray; _i < dataArray_1.length; _i++) {
    var game = dataArray_1[_i];
    console.log(game);
    // console.log(game)
}
// const game = (dataArray) => {
//     for(game of dataArray) {
//         console.log(WIN_CONDITIONS[game[1]])
//         // console.log(game)
//     }
// }
// game(dataArray)
