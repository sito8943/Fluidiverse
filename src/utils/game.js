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

export const RandomNumber = (min, max) => {
  const gen = rn.generator({
    min,
    max,
    integer: true,
  });
  return gen();
};
