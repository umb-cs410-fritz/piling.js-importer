<script>
  import { onMount } from 'svelte';
  import createPiling from './piling-example.js'

  let wrapper;
  let files;

  function readSettings(file) {
    if(!file || !file.type === "application/json") {
      alert("Please select a JSON file to load.");
    } else {
      const reader = new FileReader();
      reader.addEventListener('error', (e) => {
        console.log("Error loading file:", e.target.result);
      });
      reader.addEventListener('load', (e) => {
        const settings = JSON.parse(e.target.result);
        createPiling(wrapper, settings.pileSettings);
        // create sidebar from settings.sidebarSettings!
      });
      reader.readAsText(file);
    }
  }

  onMount(() => {
    createPiling(wrapper, {});
  });
</script>

<style>
  .header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 2rem;
  }

  .header a {
    color: white;
    text-decoration: none;
    box-shadow: inset 0 -2px 0 0 #808080;
    transition: 0.2s all ease;
  }

  .header a:hover {
    color: #ff7ff6;
    box-shadow: inset 0 -10px 0 0 #ff7ff6;
  }

  .pilingjs-wrapper {
    position: absolute;
    top: 6rem;
    left: 0;
    right: 0;
    bottom: 0;
    border-top: 1px solid #808080;
  }

  div.uploaders {
    position: relative;
    top: -15px;
    font-size: 10pt;
  }
</style>

<header class="header">
  <p>
    A simple example demonstrating how to use{' '}
    <a
      class="App-link"
      href="https://github.com/flekschas/piling.js"
      target="_blank"
      rel="noopener noreferrer"
    >
      Piling.js
    </a>{' '}
    in a Svelte app.
  </p>
  <div class='uploaders'>
    <label>
      Upload Settings:
      <input type="file" accpet=".json" bind:files />
    </label>
    <button on:click={(e) => {
      e.preventDefault();
      readSettings(files[0]);
    }}>Load</button>
  </div>
</header>
<main bind:this={wrapper} class="pilingjs-wrapper" />
