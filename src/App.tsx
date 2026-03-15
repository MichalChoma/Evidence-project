import { useState } from "react";
import { CistercianGlyph } from "./components/CistercianGlyph";
import Navbar from "./components/Navbar";
import { NumberInput } from "./components/NumberInput";
import { parseInput } from "./lib/validation";

function App() {
  const [raw, setRaw] = useState("");
  const value = parseInput(raw);

  return (
    <div className="min-h-screen bg-zinc-900 text-white flex flex-col items-center justify-center gap-8 p-8">
      <Navbar />
      <div className="grid grid-cols-2 gap-12 items-center">
        <NumberInput value={raw} onChange={setRaw} />
        {value !== null && (
          <CistercianGlyph value={value} className="w-32 text-white" />
        )}
      </div>
    </div>
  );
}

export default App;
