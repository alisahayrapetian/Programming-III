var LiveForm = require("./LiveForm");
var random = require("./random.js");

module.exports = class Hresh extends LiveForm {
    constructor(x, y) {
        super(x, y);
        this.life = 180;
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
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }
    mulhresh() {
        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);

        if (newCell) {

            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 7;
            let hresh= new Hresh(x, y);
            hreshArr.push(hresh);

            this.energy = 0;
        }
    }                 
    eathresh() {
        let emptyCells = this.chooseCell(2);
        let newCell = random(emptyCells);

        if (newCell) {
            this.energy++;
            let x = newCell[0];
            let y = newCell[1];


            matrix[y][x] = 7;
            matrix[this.y][this.x] = 0;

            for (let i in grassEaterArr) {
                if (axjikArr[i].x == x && axjikArr[i].y == y) {
                    axjikArr.splice(i, 1)
                }
            }

            this.x = x;
            this.y = y;

            if (this.energy >= 100) {
                this.mulhresh();
            }
        } else {
            this.move()
        }
    }
    move() {
        this.energy--;

        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);

        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];

            matrix[y][x] = 7;
            matrix[this.y][this.x] = 0;

            this.y = y;
            this.x = x;
        }
        if (this.energy < 0) {
            this.die();
        }
    }
    die() {
        matrix[this.y][this.x] = 0;

        for (let i in hreshArr) {
            if (hreshArr[i].x == this.x && hreshArr[i].y == this.y) {
                hreshArr.splice(i, 1)
            }
        }
    }
}