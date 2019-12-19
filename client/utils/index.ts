export const zip = <T>(rows: T[][]) =>
  rows[0].map((_, c) => rows.map(row => row[c]));
