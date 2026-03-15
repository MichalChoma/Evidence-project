export const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-10 border-b border-zinc-800 bg-zinc-900/80 backdrop-blur-sm">
    <div className="mx-auto flex h-14 max-w-6xl items-center px-6">
      <span className="font-semibold tracking-tight text-white">
        Evidence Prime | Number Translator
      </span>
      <span className="ml-3 rounded-full bg-zinc-800 px-2 py-0.5 text-xs text-zinc-300">
        0 – 9999
      </span>
    </div>
  </nav>
);
