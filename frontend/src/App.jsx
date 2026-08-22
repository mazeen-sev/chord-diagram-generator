import { useState } from "react";

function App() {

  const [mode, setMode] = useState("chord")

  return (
    <div className="flex min-h-screen bg-zinc-900 text-white">
      
      {/* LEFT PANEL: CONTROLS */}
      <aside className="w-80 p-4 space-y-6 bg-zinc-800 border-r border-zinc-700 overflow-y-auto">
        
        {/* Mode Toggle */}
        <section className="space-y-2">
          <h3 className="text-sm font-semibold text-zinc-300">Mode</h3>
          <div className="flex gap-2">
            <button 
              onClick={() => setMode("Chord")}
              className={`flex-1 px-3 py-1 rounded ${
                mode === "Chord"
                ? "bg-blue-600"
                : "bg-zinc-700 hover:bg-zinc-600"
              }`}              
            >
              Chord
            </button>
            <button
              onClick={() => setMode("Notes")} 
              className={`flex-1 px-3 py-1 rounded ${
              mode === "Notes"
              ? "bg-blue-600"
              : "bg-zinc-700 hover:bg-zinc-600"
              }`}
              >
                
              Notes
            </button>
          </div>
        </section>

        {/* Root Selector */}
        <section className="space-y-2">
          <h3 className="text-sm font-semibold text-zinc-300">Root Note</h3>
          <div className="grid grid-cols-6 gap-2">
            {["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"].map((note, i) => (
              <button
                key={i}
                className="px-2 py-1 rounded bg-zinc-700 hover:bg-zinc-600 text-sm"
              >
                {note}
              </button>
            ))}
          </div>
        </section>

        {/* Chord Type */}
        <section className="space-y-2">
          <h3 className="text-sm font-semibold text-zinc-300">Chord Type</h3>
          <select className="w-full px-2 py-1 rounded bg-zinc-700 text-white">
            <option value="maj7">maj7</option>
            <option value="min7">min7</option>
            <option value="7">7 (dominant)</option>
            <option value="dim">dim</option>
            <option value="aug">aug</option>
          </select>
        </section>

        {/* Manual Notes */}
        <section className="space-y-2">
          <h3 className="text-sm font-semibold text-zinc-300">Manual Notes</h3>
          <div className="grid grid-cols-6 gap-2">
            {["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"].map((note, i) => (
              <button
                key={i}
                className="px-2 py-1 rounded bg-zinc-700 hover:bg-zinc-600 text-sm"
              >
                {note}
              </button>
            ))}
          </div>
        </section>

        {/* Tuning */}
        <section className="space-y-2">
          <h3 className="text-sm font-semibold text-zinc-300">Tuning</h3>
          <select className="w-full px-2 py-1 rounded bg-zinc-700 text-white">
            <option value="standard">Standard (E A D G B E)</option>
            <option value="dropd">Drop D (D A D G B E)</option>
          </select>
        </section>

        {/* Fret Range */}
        <section className="space-y-2">
          <h3 className="text-sm font-semibold text-zinc-300">Fret Range</h3>
          <input type="range" min="5" max="24" defaultValue="15" className="w-full" />
          <span className="text-sm text-zinc-400">15</span>
        </section>

        {/* Display Options */}
        <section className="space-y-2">
          <h3 className="text-sm font-semibold text-zinc-300">Display Options</h3>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" defaultChecked />
            Show Note Labels
          </label>
        </section>

        {/* Legend */}
        <section className="space-y-2">
          <h3 className="text-sm font-semibold text-zinc-300">Legend</h3>
          <ul className="space-y-1 text-sm">
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500"></span> Root
            </li>
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-blue-500"></span> 3rd
            </li>
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-green-500"></span> 5th
            </li>
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-yellow-500"></span> 7th
            </li>
          </ul>
        </section>

      </aside>

      {/* RIGHT PANEL: OUTPUT */}
      <main className="flex-1 flex flex-col">
        
        {/* Header */}
        <header className="p-4 border-b border-zinc-700">
          <h2 className="text-xl font-semibold">Cmaj7</h2>
          <p className="text-zinc-400">C E G B</p>
        </header>

        {/* Fretboard */}
        <section className="flex-1 flex items-center justify-center p-4">
          <svg className="w-full h-full max-w-4xl bg-zinc-800 rounded"></svg>
        </section>

        {/* Footer */}
        <footer className="p-4 border-t border-zinc-700 text-center text-sm text-zinc-400">
          <p>1 - 3 - 5 - 7</p>
        </footer>

      </main>

    </div>
  );
}

export default App;