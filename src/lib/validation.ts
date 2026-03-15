export const MIN = 0;
export const MAX = 9999;

export function parseInput(raw: string): number | null {
  if (raw === "") return null;
  const n = parseInt(raw, 10);
  if (isNaN(n) || n < MIN || n > MAX) return null;
  return n;
}

export const isInputInvalid = (raw: string): boolean =>
  raw !== "" && parseInput(raw) === null;
