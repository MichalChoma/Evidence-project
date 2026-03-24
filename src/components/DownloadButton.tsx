import { generateSvgString } from "../lib/cistercian";

interface Props {
  value: number;
}

export const DownloadButton = ({ value }: Props) => {
  const handleClick = () => {
    const blob = new Blob([generateSvgString(value)], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `cistercian-${value}.svg`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={handleClick}
      aria-label={`Download SVG for ${value}`}
      className="rounded-lg border border-zinc-600 bg-zinc-800 px-4 py-2 text-sm text-white hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500"
    >
      Download SVG
    </button>
  );
};
