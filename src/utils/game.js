import { zeros } from "mathjs";
import rn from "random-number";

export const BoardGeneration = (lx, ly) => {
  const board = zeros(lx, ly);
  return board;
};

export const RandomPlayerPosition = (lx, ly) => {
  const rx = RandomNumber(0, lx);
  const ry = RandomNumber(0, ly);
  return { rx, ry };
};

export const RandomMove = (xs, ys, lx, ly) => {
  const moves = [];
  if (left(xs)) moves.push("left");
  if (right(xs, lx)) moves.push("right");
  if (up(ys)) moves.push(up);
  if (down(ys, ly)) moves.push(down);
  const rn = RandomNumber(0, moves.length);
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
