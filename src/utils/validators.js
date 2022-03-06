const regs = [
  /[see(][A-Za-z0-9]+[)]/gm,
  /[next(][A-Za-z0-9]+[,][A-Za-z0-9]+[)]/gm,
  /[action(][A-Za-z0-9]+[)]/gm,
];

export const RegEnums = {
  see: 1,
  next: 2,
  action: 3,
};

export const SyntaxValidator = (string, reg) => {
  const fun = [];
  const regex = regs[reg];
  const str = string;
  let m;

  while ((m = regex.exec(str)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
      regex.lastIndex++;
    }

    // The result can be accessed through the `m`-variable.
    m.forEach((match, groupIndex) => {
      fun.push(match);
    });
  }
  return fun;
};
