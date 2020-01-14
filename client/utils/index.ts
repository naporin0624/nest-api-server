export const zip = <T>(rows: T[][]) =>
  rows[0].map((_, c) => rows.map(row => row[c]));

export const unique = <T>(arr: T[]) =>
  arr.filter((x, i, self) => self.indexOf(x) === i);

export const valueCounter = (arr: string[]) => {
  let counts: { [key: string]: number } = {};
  arr.forEach(el => (counts[el] ? counts[el]++ : (counts[el] = 1)));
  return counts;
};
