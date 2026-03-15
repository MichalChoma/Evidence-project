import { useState } from "react";
import { NumberInput } from "./components/NumberInput";
import { parseInput } from "./lib/validation";

function App() {
  const [raw, setRaw] = useState("");
  const value = parseInput(raw);

  return (
    <div className="min-h-screen bg-zinc-900 text-white flex flex-col items-center justify-center gap-8 p-8">
      <h1 className="text-3xl font-semibold tracking-tight">
        Cyfry cysterciańskie
      </h1>
      <NumberInput value={raw} onChange={setRaw} />
      {value !== null && (
        <p className="text-zinc-400 text-sm">
          Wybrana liczba: <span className="text-white font-mono">{value}</span>
        </p>
      )}
    </div>
  );
}

export default App;
