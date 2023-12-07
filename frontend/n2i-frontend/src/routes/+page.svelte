<svelte:head>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900;1000&display=swap" rel="stylesheet"> 
</svelte:head>

<Card isFlipped="true"/>


<script>

import ioClient from 'socket.io-client';
const ENDPOINT = 'http://localhost:3000';

const socket = ioClient(ENDPOINT);
export const io = socket;

import Card from '../components/card/card.svelte';
</script>


<style>
    :global(body) {
        font-family: 'Nunito';
    }
</style>

