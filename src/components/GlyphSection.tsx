import { generateSvgString } from "../lib/cistercian";
import { CistercianGlyph } from "./CistercianGlyph";
import { DownloadButton } from "./DownloadButton";

interface Props {
  value: number | null;
}

export const GlyphSection = ({ value }: Props) => {
  const glyph =
    value !== null
      ? {
          value,
          href: `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
            generateSvgString(value)
          )}`,
        }
      : null;

  return (
    <section
      aria-label="Cistercian numeral result"
      aria-live="polite"
      aria-atomic="true"
      className="flex flex-col items-center gap-4"
    >
      {glyph && (
        <>
          <CistercianGlyph
            value={glyph.value}
            className="w-32 sm:w-48 text-white"
          />
          <p
            className="text-zinc-300 font-mono text-lg"
            aria-label={`Arabic numeral: ${glyph.value}`}
          >
            {glyph.value}
          </p>
          <DownloadButton
            href={glyph.href}
            filename={`cistercian-${glyph.value}.svg`}
          />
        </>
      )}
    </section>
  );
};
