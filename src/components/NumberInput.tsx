import { isInputInvalid, MAX, MIN } from '../lib/validation';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export function NumberInput({ value, onChange }: Props) {
  const invalid = isInputInvalid(value);

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="number-input" className="text-sm text-zinc-400">
        Liczba ({MIN}–{MAX})
      </label>
      <input
        id="number-input"
        type="number"
        min={MIN}
        max={MAX}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="np. 1999"
        className={[
          'w-48 rounded-lg border bg-zinc-800 px-4 py-2 text-white outline-none',
          'focus:ring-2',
          invalid
            ? 'border-red-500 focus:ring-red-500'
            : 'border-zinc-600 focus:ring-violet-500',
        ].join(' ')}
      />
      {invalid && (
        <p className="text-sm text-red-400">Wpisz liczbę całkowitą od {MIN} do {MAX}</p>
      )}
    </div>
  );
}
