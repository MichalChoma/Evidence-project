interface Props {
  href: string;
  filename: string;
}

export const DownloadButton = ({ href, filename }: Props) => (
  <a
    href={href}
    download={filename}
    aria-label={`Download file ${filename}`}
    className="rounded-lg border border-zinc-600 bg-zinc-800 px-4 py-2 text-sm text-white hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500"
  >
    Download SVG
  </a>
);
