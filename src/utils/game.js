import { zeros } from "mathjs";
import rn from "random-number";

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

export const RandomPlayerPosition = (lx, ly) => {
  const rx = RandomNumber(0, lx - 1);
  const ry = RandomNumber(0, ly - 1);
  return { rx, ry };
};

export const RandomMove = (positionXY, lx, ly) => {
  const { rx, ry } = positionXY;
  const moves = [];
  if (left(rx)) moves.push({ rx: rx - 1, ry }); // left
  if (right(rx, lx)) moves.push({ rx: rx + 1, ry }); // right
  if (up(ry)) moves.push({ rx, ry: ry - 1 }); // up
  if (down(ry, ly)) moves.push({ rx, ry: ry + 1 }); // down
  let rn = RandomNumber(0, moves.length - 1);
  // while (moves[rn] !== positionXY) rn = RandomNumber(0, moves.length - 1);
  console.log(moves);
  console.log(positionXY);
  console.log(moves[rn]);
  return moves[rn];
};

export const CanMove = (xs, ys, lx, ly) => {
  let moves = 0;
  if (left(xs)) moves++;
  if (right(xs, lx)) moves++;
  if (up(ys)) moves++;
  if (down(ys, ly)) moves++;
  return moves;
};

const left = (xs) => {
  if (xs > 0) return true;
  return false;
};

const right = (xs, lx) => {
  if (xs < lx) return true;
  return false;
};

const up = (ys, ly) => {
  if (ys > 0) return true;
  return false;
};

const down = (ys, ly) => {
  if (ys < ly) return true;
  return false;
};

export const RandomNumber = (min, max) => {
  const gen = rn.generator({
    min,
    max,
    integer: true,
  });
  return gen();
};
