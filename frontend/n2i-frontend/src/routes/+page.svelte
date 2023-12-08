<svelte:head>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900;1000&display=swap" rel="stylesheet"> 
</svelte:head>

<Card isFlipped={true} && theme={selectedOption}/>

<Card isFlipped={false} && theme={selectedOption}/>


<button on:click={openPopup}>Choix du themes</button>

<div class:popup={true} class:visible={popupVisible}>
  <h3>Select an option:</h3>
  {#each options as { label, value } (value)}
    <label>
      <input type="radio" bind:group={selectedOption} value={value} />
      {label}
    </label>
  {/each}
  <button on:click={handleSelectOption}>Select</button>
  <button on:click={closePopup}>Cancel</button>
</div>

<div class:overlay={true} class:visible={popupVisible} on:click={closePopup}></div>

<script>

import { createEventDispatcher } from 'svelte';

let popupVisible = false;
let selectedOption = '';
const dispatch = createEventDispatcher();

const options = [
  { label: 'Classique', value: 'classique' },
  { label: 'Darkmode', value: 'darkmode' },
  { label: 'Kawai', value: 'kawai' },
  { label: 'Noel', value: 'noel'},
];

function openPopup() {
  popupVisible = true;
}

function closePopup() {
  popupVisible = false;
}

function handleSelectOption() {
  dispatch('selectedOption', selectedOption);
  closePopup();
}

    
    import ioClient from 'socket.io-client';
    const ENDPOINT = 'http://localhost:3000';
    
    const socket = ioClient(ENDPOINT);
    export const io = socket;
    
    import Card from '../components/card/card.svelte';
</script>

<style>

.popup {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    z-index: 1000;
    width: 100%;
    height: 100%;
  }

  .overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }

  .popup.visible,
  .overlay.visible {
    display: block;
  }

    :global(body) {
        font-family: 'Nunito';
    }
</style>

