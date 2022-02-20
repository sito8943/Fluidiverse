import { GenerateRandomNumber } from "../utils/functions";

export default class BotBoard {
  /**
   *
   * @param {number} x
   * @param {number} y
   * @param {object[]} E
   */
  constructor(x, y, E) {
    const matrix = [];
    for (let i = 0; i < y; i++) {
      const row = [];
      for (let j = 0; j < x; j++) {
        const ran = GenerateRandomNumber(0, E.length);
        row.push(ran);
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
   */
  setCell = (row, column, value) => {
    this.board[row][column] = value;
  };
}
