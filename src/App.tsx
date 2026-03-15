import { useState } from "react";
import { GlyphSection } from "./components/GlyphSection";
import { InputSection } from "./components/InputSection";
import { Navbar } from "./components/Navbar";
import { parseInput } from "./lib/validation";

function App() {
  const [raw, setRaw] = useState("");
  const value = parseInput(raw);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-zinc-900 text-white flex flex-col items-center gap-12 p-8 pt-24">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-100">
          Cistercian Number Translator
        </h1>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <InputSection value={raw} onChange={setRaw} />
          <GlyphSection value={value} />
        </section>
      </main>
    </>
  );
}

export default App;
