export type Segment = { x1: number; y1: number; x2: number; y2: number };

const BASE_SEGMENTS: Record<number, Segment[]> = {
  1: [{ x1: 60, y1: 20, x2: 100, y2: 20 }],
  2: [{ x1: 60, y1: 60, x2: 100, y2: 60 }],
  3: [{ x1: 60, y1: 20, x2: 100, y2: 60 }],
  4: [{ x1: 60, y1: 60, x2: 100, y2: 20 }],
  5: [
    { x1: 60, y1: 20, x2: 100, y2: 20 },
    { x1: 60, y1: 60, x2: 100, y2: 20 },
  ],
  6: [{ x1: 100, y1: 20, x2: 100, y2: 60 }],
  7: [
    { x1: 60, y1: 20, x2: 100, y2: 20 },
    { x1: 100, y1: 20, x2: 100, y2: 60 },
  ],
  8: [
    { x1: 60, y1: 60, x2: 100, y2: 60 },
    { x1: 100, y1: 20, x2: 100, y2: 60 },
  ],
  9: [
    { x1: 60, y1: 20, x2: 100, y2: 20 },
    { x1: 60, y1: 60, x2: 100, y2: 60 },
    { x1: 100, y1: 20, x2: 100, y2: 60 },
  ],
};

const mirrorX = (s: Segment): Segment => ({
  x1: 120 - s.x1,
  y1: s.y1,
  x2: 120 - s.x2,
  y2: s.y2,
});
const mirrorY = (s: Segment): Segment => ({
  x1: s.x1,
  y1: 180 - s.y1,
  x2: s.x2,
  y2: 180 - s.y2,
});
const mirrorBoth = (s: Segment): Segment => mirrorY(mirrorX(s));

export const getSegments = (n: number): Segment[] => {
  if (n < 0 || n > 9999) return [];

  const ones = n % 10;
  const tens = Math.floor(n / 10) % 10;
  const hundreds = Math.floor(n / 100) % 10;
  const thousands = Math.floor(n / 1000) % 10;

  return [
    { x1: 60, y1: 20, x2: 60, y2: 160 }, // main vertical line
    ...(BASE_SEGMENTS[ones] ?? []),
    ...(BASE_SEGMENTS[tens]?.map(mirrorX) ?? []),
    ...(BASE_SEGMENTS[hundreds]?.map(mirrorY) ?? []),
    ...(BASE_SEGMENTS[thousands]?.map(mirrorBoth) ?? []),
  ];
};

export const generateSvgString = (n: number): string => {
  const lines = getSegments(n)
    .map(
      ({ x1, y1, x2, y2 }) =>
        `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>`
    )
    .join("\n  ");
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 180">\n  ${lines}\n</svg>`;
};
