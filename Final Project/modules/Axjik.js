var LiveForm = require("./LiveForm");
var random = require("./random.js");

module.exports = class Axjik extends LiveForm {
    constructor(x, y) {
        super(x, y);
        this.multiply = 0;
    } 
    

getNewCoordinates() {
    this.directions = [
        [this.x, this.y - 1],
        [this.x, this.y + 1],
        [this.x + 1, this.y],
        [this.x - 1, this.y],

    ];
}
chooseCell(character) {
    this.getNewCoordinates()
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
mulaxjik() {
    this.multiply++;

    let emptyCells = this.chooseCell(0);
    let emptyCells5 = this.chooseCell(1);
    let newCell = random(emptyCells.concat(emptyCells5));

    if (newCell && this.multiply > 25) {

        let x = newCell[0];
        let y = newCell[1];


        matrix[y][x] = 5;

        for (let i in grassArr) {
            if (grassArr[i].x == x && grassArr[i].y == y) {
                grassArr.splice(i, 0)
            }
        }

        let axjik = new Axjik(x, y);
        axjikArr.push(axjik);


        this.multiply = 0;
    }
}
}

