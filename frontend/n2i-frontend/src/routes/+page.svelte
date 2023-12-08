<svelte:head>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900;1000&display=swap" rel="stylesheet"> 
</svelte:head>

<main id="board">
    <div class="opponent-hand">
        <Card isFlipped={true} theme={selectedOption}/>
        <Card isFlipped={true} theme={selectedOption}/>
        <Card isFlipped={true} theme={selectedOption}/>
        <Card isFlipped={true} theme={selectedOption}/>
    </div>

    <div id="central-board">

        <div id="decks">
            <Card isFlipped={true} theme={selectedOption} type={"action"}/>
            <Card isFlipped={true} theme={selectedOption} type={"action"}/>
        </div>

        <div id="central-grid-wrapper">
            <div id="central-grid">
                <MisinformationCards />
                <MisinformationCards />
                <MisinformationCards />
                <MisinformationCards />
                <MisinformationCards />
                <MisinformationCards />
                <MisinformationCards />
                <MisinformationCards />
                <MisinformationCards />
            </div>
        </div>
        
        <div id="discards">
            <Card isFlipped={false} && theme={selectedOption} />
            <Card isFlipped={false} && theme={selectedOption} />
        </div>

    </div>

    <div id="my-hand">
        <Card isEnlargable={true} theme={selectedOption} type={"action"}/>
        <Card isEnlargable={true} theme={selectedOption} type={"action"}/>
        <Card isEnlargable={true} theme={selectedOption} type={"action"}/>
        <Card isEnlargable={true} theme={selectedOption} type={"info"}/>
        <Card isEnlargable={true} theme={selectedOption} type={"info"}/>
        <Card isEnlargable={true} theme={selectedOption} type={"info"}/>
    </div>
</main>


<button id="theme-selection" on:click={openPopup}>THEMES</button>

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

<script>

import { createEventDispatcher } from 'svelte';

let popupVisible = false;
let selectedOption = 'classique';
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
import MisinformationCards from '../components/misinformationCard/misinformationCard.svelte';
</script>


<style lang="scss">
    @use './page.scss';
</style>


