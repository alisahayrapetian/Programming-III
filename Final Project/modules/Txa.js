
var LiveForm = require("./LiveForm");
var random = require("./random.js");

module.exports = class Txa extends LiveForm {
    constructor(x, y) {
        super(x, y);
        this.powre = 10;
    }
  

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x + 2, this.y + 2],
            [this.x - 2, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 2, this.y + 2]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return super.chooseCell(character);
    }
    mul() {
        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);

        if (newCell) {

            let x = newCell[0];
            let y = newCell[1];

            matrix[y][x] = 4;

            let txa = new Txa(x, y);
            txaArr.push(txa);

            this.power = 0;
        }
    }
    eattxa() {
        let emptyCells = this.chooseCell(5);
        let emptyCellss = this.chooseCell(3);
        let newCell = random(emptyCells.concat(emptyCellss));
        if (newCell) {
            this.power++;
            let x = newCell[0];
            let y = newCell[1];


            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;


            for (let i in gishatichArr) {
                if (gishatichArr[i].x == x && gishatichArr[i].y == y) {
                    gishatichArr.splice(i, 1)
                }
            }

            for (let i in axjikArr) {
                if (axjikArr[i].x == x && axjikArr[i].y == y) {
                    axjikArr.splice(i, 1)
                }
            }

            this.x = x;
            this.y = y;

            if (this.power >= 30) {
                this.mul();
            }
        } else {
            this.move()
        }
    }
    move() {
        this.power--;

        let emptyCells = this.chooseCell(0);
        let emptyCellss = this.chooseCell(1);
        let newCell = random(emptyCells.concat(emptyCellss));

        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];


            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;

            for (let i in grassArr) {
                if (grassArr[i].x == x && grassArr[i].y == y) {
                    grassArr.splice(i, 0)
                }
            }

            this.y = y;
            this.x = x;
        }
        else if (newCell) {
            let x = newCell[0];
            let y = newCell[1];


            matrix[y][x] = 4;
            matrix[this.y][this.x] = 1;

            this.y = y;
            this.x = x;
        }
    }
}









//     move() {
//         this.power--;

//         let emptyCells = this.chooseCell(0);
//         let emptyCellss = this.chooseCell(1);
//         let newCell = random(emptyCells.concat(emptyCellss));

//         if (newCell) {
//             let x = newCell[0];
//             let y = newCell[1];


//             matrix[y][x] = 4;
//             matrix[this.y][this.x] = 0;

//             for (let i in grassArr) {
//                 if (grassArr[i].x == x && grassArr[i].y == y) {
//                     grassArr.splice(i, 0)
//                 }
//             }

//             this.y = y;
//             this.x = x;
//         }
//         else if (newCell) {
//             let x = newCell[0];
//             let y = newCell[1];


//             matrix[y][x] = 4;
//             matrix[this.y][this.x] = 1;

//             this.y = y;
//             this.x = x;
//         }
//     }
   
//     eattxa() {
//         let emptyCells = this.chooseCell(5);
//         let emptyCellss = this.chooseCell(3);
//         let newCell = random(emptyCells.concat(emptyCellss));
//         if (newCell) {
//             this.power++;
//             let x = newCell[0];
//             let y = newCell[1];


//             matrix[y][x] = 4;
//             matrix[this.y][this.x] = 0;


//             for (let i in gishatichArr) {
//                 if (gishatichArr[i].x == x && gishatichArr[i].y == y) {
//                     gishatichArr.splice(i, 1)
//                 }
//             }

//             for (let i in axjikArr) {
//                 if (axjikArr[i].x == x && axjikArr[i].y == y) {
//                     axjikArr.splice(i, 1)
//                 }
//             }

//             this.x = x;
//             this.y = y;

//             if (this.power >= 30) {
//                 this.mul();
//             }
//         } else {
//             this.move()
//         }
//     }
//     mul() {
//         //փնտրում է դատարկ տարածք
        
//         let emptyCells = this.chooseCell(0);
//         let newCell = random(emptyCells);

//         if (newCell) {
//             termHashiv++
//             let x = newCell[0];
//             let y = newCell[1];
//             matrix[y][x] = 4;
//             let term = new Terminator(x, y);
//             termArr.push(term);
//             this.life = 10;
//         }
//     }
//     die() {
//         matrix[this.y][this.x] = 0;
//         for (let i in termArr) {
//             if (termArr[i].x == this.x && termArr[i].y == this.y) {
//                 termArr.splice(i, 1)
//             }
//         }
//     }
// }