import { getSegments } from '../lib/cistercian';

interface Props {
  value: number;
  className?: string;
}

export function CistercianGlyph({ value, className }: Props) {
  const segments = getSegments(value);

  return (
    <svg viewBox="0 0 120 180" className={className} aria-label={`Cyfra cysterciańska: ${value}`}>
      {segments.map(({ x1, y1, x2, y2 }, i) => (
        <line
          key={i}
          x1={x1} y1={y1}
          x2={x2} y2={y2}
          stroke="currentColor"
          strokeWidth={3}
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}
