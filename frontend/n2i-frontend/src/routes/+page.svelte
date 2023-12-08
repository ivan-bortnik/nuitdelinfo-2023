<svelte:head>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900;1000&display=swap" rel="stylesheet"> 
</svelte:head>

<main id="board">
    <div id="opponent-deck" class="deck"><Card isFlipped={true}/><Card isFlipped={true}/><Card isFlipped={true}/><Card isFlipped={true}/><Card isFlipped={true}/><Card isFlipped={true}/></div>
    <div class="mat">
        <div class="draws">
            <div id="action-draw"><Card isFlipped={true}/></div>
            <div id="information-draw"><Card isFlipped={true}/></div>
        </div>
        <div id="misinformations">
            <MisinformationCards /><MisinformationCards /><MisinformationCards />
            <MisinformationCards /><MisinformationCards /><MisinformationCards />
            <MisinformationCards /><MisinformationCards /><MisinformationCards />
        </div>
        <div class="discards">
            <div id="opponent-discard"><Card isFlipped={false}/></div>
            <div id="my-discard"><Card isFlipped={false}/></div>
        </div>
    </div>
    <div class="my-deck-wrapper">
        <div id="my-deck" class="deck"><Card isFlipped={false}/><Card isFlipped={false}/><Card isFlipped={false}/><Card isFlipped={false}/><Card isFlipped={false}/><Card isFlipped={false}/></div>
        <div class="my-deck-back"></div>
    </div>
</main>

<script>

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


