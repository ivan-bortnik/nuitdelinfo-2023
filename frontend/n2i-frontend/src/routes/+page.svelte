<svelte:head>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900;1000&display=swap" rel="stylesheet"> 
</svelte:head>

<main id="board">
    <div class="opponent-hand">
        <Card isFlipped={true} />
        <Card isFlipped={true} />
        <Card isFlipped={true} />
        <Card isFlipped={true} />
    </div>

    <div id="central-board">

        <div id="decks">
            <Card isFlipped={true} />
            <Card isFlipped={true} />
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
            <Card isFlipped={false} />
            <Card isFlipped={false} />
        </div>

    </div>

    <div id="my-hand">
        <Card isEnlargable={true}/>
        <Card isEnlargable={true}/>
        <Card isEnlargable={true}/>
        <Card isEnlargable={true}/>
        <Card isEnlargable={true}/>
        <Card isEnlargable={true}/>
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


