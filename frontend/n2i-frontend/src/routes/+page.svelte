<script>

import ioClient from 'socket.io-client';

import Card from '../components/card.svelte';
const ENDPOINT = 'http://localhost:3000';

const socket = ioClient(ENDPOINT);

export const io = socket;

</script>

<Card>
    <h1 slot="card-title">This is a title</h1>
    <svg slot="card-thumb"></svg>
    <p slot="card-desc">This is a desc</p>
</Card>