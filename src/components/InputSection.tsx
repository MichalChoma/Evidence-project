import { NumberInput } from "./NumberInput";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export const InputSection = ({ value, onChange }: Props) => (
  <section aria-labelledby="input-heading" className="flex flex-col gap-2">
    <p id="input-heading" className="text-sm text-zinc-300">
      Enter a number to see its Cistercian representation.
    </p>
    <NumberInput value={value} onChange={onChange} />
  </section>
);
