export const zip = <T>(rows: T[][]) =>
  rows[0].map((_, c) => rows.map(row => row[c]));

export const unique = <T>(arr: T[]) =>
  arr.filter((x, i, self) => self.indexOf(x) === i);
