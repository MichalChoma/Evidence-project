import { isInputInvalid, MAX, MIN } from "../lib/validation";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export function NumberInput({ value, onChange }: Props) {
  const invalid = isInputInvalid(value);

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="number-input" className="text-sm text-zinc-300">
        Number ({MIN}–{MAX})
      </label>
      <input
        id="number-input"
        type="number"
        min={MIN}
        aria-invalid={invalid}
        max={MAX}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="e.g. 1999"
        className={[
          "w-48 rounded-lg border bg-zinc-800 px-4 py-2 text-white outline-none",
          "placeholder:text-zinc-400",
          "focus:ring-2",
          invalid
            ? "border-red-500 focus:ring-red-500"
            : "border-zinc-600 focus:ring-violet-500",
        ].join(" ")}
      />
      {invalid && (
        <p role="alert" className="text-sm text-red-300">
          Enter a number between {MIN} and {MAX}
        </p>
      )}
    </div>
  );
}
