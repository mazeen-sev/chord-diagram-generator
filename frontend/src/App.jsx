import "./App.css";

function App() {
  return (
    <div id="app">

      {/* LEFT PANEL: CONTROLS */}
      <aside id="controls">

        {/* Mode Toggle */}
        <section className="control-group">
          <h3>Mode</h3>
          <button id="mode-chord">Chord</button>
          <button id="mode-notes">Notes</button>
        </section>

        {/* Root Selector */}
        <section className="control-group">
          <h3>Root Note</h3>
          <div id="root-selector">
            {["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"].map((note, i) => (
              <button key={i} data-note={i}>{note}</button>
            ))}
          </div>
        </section>

        {/* Chord Type */}
        <section className="control-group">
          <h3>Chord Type</h3>
          <select id="chord-type">
            <option value="maj7">maj7</option>
            <option value="min7">min7</option>
            <option value="7">7 (dominant)</option>
            <option value="dim">dim</option>
            <option value="aug">aug</option>
          </select>
        </section>

        {/* Manual Notes */}
        <section className="control-group">
          <h3>Manual Notes</h3>
          <div id="note-selector">
            {["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"].map((note, i) => (
              <button key={i} data-note={i}>{note}</button>
            ))}
          </div>
        </section>

        {/* Tuning */}
        <section className="control-group">
          <h3>Tuning</h3>
          <select id="tuning">
            <option value="standard">Standard (E A D G B E)</option>
            <option value="dropd">Drop D (D A D G B E)</option>
          </select>
        </section>

        {/* Fret Range */}
        <section className="control-group">
          <h3>Fret Range</h3>
          <input type="range" min="5" max="24" defaultValue="15" />
          <span>15</span>
        </section>

        {/* Display Options */}
        <section className="control-group">
          <h3>Display Options</h3>
          <label>
            <input type="checkbox" defaultChecked />
            Show Note Labels
          </label>
        </section>

        {/* Legend */}
        <section className="control-group">
          <h3>Legend</h3>
          <ul id="legend">
            <li><span className="legend-root"></span> Root</li>
            <li><span className="legend-third"></span> 3rd</li>
            <li><span className="legend-fifth"></span> 5th</li>
            <li><span className="legend-seventh"></span> 7th</li>
          </ul>
        </section>

      </aside>

      {/* RIGHT PANEL: OUTPUT */}
      <main id="visualizer">

        {/* Header */}
        <header id="output-header">
          <h2>Cmaj7</h2>
          <p>C E G B</p>
        </header>

        {/* Fretboard */}
        <section id="fretboard-container">
          <svg id="fretboard"></svg>
        </section>

        {/* Footer */}
        <footer id="output-footer">
          <p>1 - 3 - 5 - 7</p>
        </footer>

      </main>

    </div>
  );
}

export default App;