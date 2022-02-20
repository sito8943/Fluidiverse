import { GenerateRandomNumber } from "../utils/functions";

export default class BotBoard {
  /**
   *
   * @param {number} x
   * @param {number} y
   * @param {object[]} E
   * @param {object} Distribution
   */
  constructor(x, y, E, Distribution) {
    const matrix = [];
    for (let i = 0; i < y; i++) {
      const row = [];
      for (let j = 0; j < x; j++) {
        const ran = GenerateRandomNumber(0, Distribution.length);
        row.push(E.indexOf(E[Distribution[ran]]));
      }
      matrix.push(row);
    }
    this.board = matrix;
  }

  get Board() {
    return this.board;
  }

  /**
   *
   * @param {number} row
   * @param {number} column
   * @returns
   */
  getCell = (row, column) => {
    return this.board[row][column];
  };

  /**
   *
   * @param {number} row
   * @param {number} column
   * @param {number} value new value
   */
  setCell = (row, column, value) => {
    console.log(this.board[row][column]);
    this.board[row][column] = value;
    console.log(this.board[row][column]);
  };
}
