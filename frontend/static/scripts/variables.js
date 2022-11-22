let allGrids = [];

const P1 = {
    name: 'Player 1',
    symbol: 'x',
    color: 'green-class',
    grids: []
};

const AI = {
    name: 'AI',
    symbol: 'O',
    color: 'red-class',
    grids: []
};

const P2 = {
    name: 'Player 2',
    symbol: 'O',
    color: 'red-class',
    grids: []
};

let getValue = undefined;
let currentPlayer = P1;
const correctScore = [['0', '1', '2'], ['3', '4', '5'], ['6', '7', '8'], ['0', '3', '6'], ['1', '4', '7'], ['2', '5', '8'], ['0', '4', '8'], ['2', '4', '6']];

const checkScore = (array) => {
    console.log(allGrids);
    let multipleExist = false;
    for (let i = 0; i < correctScore.length; i++)
    {
        multipleExist = correctScore[i].every(value => {
            return array.includes(value);
        });
        if (multipleExist) {
            break;
        }
    }
    return multipleExist;
};