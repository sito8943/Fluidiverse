// import { zeros } from "mathjs";
import rn from "random-number";

export const unitsTypeName = ["nothing", "player", "planet", "black-hole", "star"];
export const unitsTypeEnum = {
    nothing: 0,
    player: 1,
    planet: 2,
    blackHole: 3,
    star: 4
}

export const FromMatrixToArray = (matrix, lx, ly) => {
    let xs = 0;
    const newMatrix = [];
    let row = [];
    matrix.forEach((value, index, matrix) => {
        if (xs < lx) {
            row.push(value);
            ++xs;
        } else {
            newMatrix.push(row);
            row = [];
            xs = 0;
        }
    });
    return newMatrix;
};

export const BoardGeneration = (lx, ly) => {
    /* const board = zeros(lx, ly); */
    const board = [];
    for (let i = 0; i < lx; ++i) {
        const row = [];
        for (let j = 0; j < ly; ++j) row.push(0);
        board.push(row);
    }
    return board;
};

/**
 *
 * @param {number} lx
 * @param {number} ly
 * @param {number[][]} board
 * @param {object[]} units
 * @return
 */
export const FillWithStaticUnits = (lx, ly, board, units) => {
    const newBoard = board;
    const maxOf = [];
    let unitCount = 0;
    let unitsCreated = 0;
    units.forEach((item) => {
        unitCount += item;
        maxOf.push(0);
    })
    while (unitsCreated < unitCount) {
        const random = RandomNumber(2, 4);
        let result = {x: 0, y: 0};
        if (maxOf[random] < units[random]) {
            switch (random) {
                case unitsTypeEnum.planet:
                    result = generatePlanet(lx, ly, newBoard);
                    break;
                case unitsTypeEnum.blackHole:
                    result = generateBlackHole(lx, ly, newBoard);
                    break;
                case unitsTypeEnum.star:
                    result = generateStar(lx, ly, newBoard);
                    break;
            }
        }
    }
}

/**
 *
 * @param {number} lx
 * @param {number} ly
 * @param {number[][]} board
 */
const generatePlanet = (lx, ly, board) => {

}

/**
 *
 * @param {number} lx
 * @param {number} ly
 * @param {number[][]} board
 */
const generateStar = (lx, ly, board) => {

}

/**
 *
 * @param {number} lx
 * @param {number} ly
 * @param {number[][]} board
 */
const generateBlackHole = (lx, ly, board) => {

}

/**
 *
 * @param {number[][]} board
 * @param {number[]} targets
 * @param {number} sx
 * @param {number} sy
 * @param {number} mx
 * @param {number} my

 * @return
 */
export const FindTargets = (board, targets, sx = 0, sy = 0, lx = 0, ly = 0) => {
    // looking up
    for (let i = my; i > -1; --i) {
        if ()
            }
}

/**
 *
 * @param {number} type
 * @param {number} x
 * @param {number} y
 * @param {number[][]} board
 * @constructor
 */
export const ThereIsA = (type, x, y, board) => {
    if (board[y][x] === type)
        return true;
    return false
}

/**
 * Generate a random position within the bounds of the map
 * @param lx - The length of the board in the x direction.
 * @param ly - The height of the map.
 * @returns An object with two properties, rx and ry.
 */
export const RandomPosition = (lx, ly) => {
    const rx = RandomNumber(0, lx - 1);
    const ry = RandomNumber(0, ly - 1);
    return {rx, ry};
};

export const RandomMove = (positionXY, lx, ly) => {
    const {rx, ry} = positionXY;
    const moves = [];
    if (left(rx)) moves.push({rx: rx - 1, ry}); // left
    if (right(rx, lx)) moves.push({rx: rx + 1, ry}); // right
    if (up(ry)) moves.push({rx, ry: ry - 1}); // up
    if (down(ry, ly)) moves.push({rx, ry: ry + 1}); // down
    let rn = RandomNumber(0, moves.length - 1);
    if (moves.length === 1) return moves[0];
    return moves[rn];
};

/**
 * Given a list of x coordinates and a list of y coordinates, return the number of moves that can be
 * made
 * @param xs - the current x position of the player
 * @param ys - the current y-coordinate of the player
 * @param lx - length of the board
 * @param ly - the length of the y-axis
 * @returns The number of moves that can be made.
 */
export const CanMove = (xs, ys, lx, ly) => {
    let moves = 0;
    if (left(xs)) moves++;
    if (right(xs, lx)) moves++;
    if (up(ys)) moves++;
    if (down(ys, ly)) moves++;
    return moves;
};

/**
 * Given a number, return true if the number is greater than 0
 * @param xs - the number of times the function has been called
 * @returns A boolean value.
 */
const left = (xs) => {
    if (xs > 0) return true;
    return false;
};

/**
 * Given a list of numbers and a number, return true if the list of numbers is sorted in descending
 * order
 * @param xs - the current list of numbers
 * @param lx - the left-most x coordinate
 * @returns Nothing.
 */
const right = (xs, lx) => {
    if (xs < lx) return true;
    return false;
};

/**
 * Returns true if the y-coordinate of the point is greater than 0
 * @param ys - the current y value
 * @param ly - the last y value
 */
const up = (ys, ly) => {
    if (ys > 0) return true;
    return false;
};

/**
 * Given a list of y-values and a lower y-value, return true if all y-values are less than the lower
 * y-value
 * @param ys - the current y value
 * @param ly - the last y value
 * @returns a boolean value.
 */
const down = (ys, ly) => {
    if (ys < ly) return true;
    return false;
};

/**
 * Generate a random number between min and max
 * @param min - The minimum value that can be generated.
 * @param max - The maximum value that can be generated.
 * @returns A random number between the min and max values.
 */
export const RandomNumber = (min, max) => {
    const gen = rn.generator({
        min,
        max,
        integer: true,
    });
    return gen();
};
