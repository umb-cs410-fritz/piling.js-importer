import React, { useCallback, useState } from 'react';
import './App.css';

import { create } from './piling-example.js';

export default function App() {
  const [state, setState] = useState({});
  const pilingInitHandler = useCallback(async (element) => {
    if (!element) return;
    const piling = create(element, state);
    console.info(`Piling.js v${piling.version}`);
    return () => piling.destroy();
  }, [state]);

  const settingsInput = React.createRef();

  return (
    <div className="App">
      <header className="App-header">
        <p>
          A simple example demonstrating how to use{' '}
          <a
            className="App-link"
            href="https://github.com/flekschas/piling.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            Piling.js
          </a>{' '}
          in a React app.
        </p>
        <div className='uploaders'>
          <label>
            Upload Settings:
            <input type="file" accept=".json" ref={settingsInput} />
          </label>
          <button onClick={(e)=>{
            e.preventDefault();
            readSettings(settingsInput.current.files[0], setState);
          }}>Load</button>
        </div>
      </header>
      <main
        className="App-piling-wrapper"
        ref={pilingInitHandler}
      />
    </div>
  );
};

function readSettings(file, update) {
  if(!file || !file.type === "application/json") {
    alert("Please select a JSON file to load.");
  } else {
    const reader = new FileReader();
    reader.addEventListener('error', (e) => {
      console.log("Error loading file:", e.target.result);
    });
    reader.addEventListener('load', (e) => {
      const settings = JSON.parse(e.target.result);
      update(settings);
    });
    reader.readAsText(file);
  }
}
