<svelte:head>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900;1000&display=swap" rel="stylesheet"> 
</svelte:head>

<button  on:click={ () => io.emit('createRoom') }>CREATE ROOM</button>

<h2>Available rooms</h2>

{#each Object.keys(rooms) as room}
    {#if rooms[room].playersCount < 2}
        <button on:click={ () => io.emit('requestToJoin', room) }>
            { rooms[room].id } [{ rooms[room].playersCount }/2]
        </button>
        <br>
    {/if}
{/each}


<script>

import ioClient from 'socket.io-client';
const ENDPOINT = 'http://localhost:3000';

const socket = ioClient(ENDPOINT);
export const io = socket;

var rooms = {};

io.on('updateRoomsList', (data) => { rooms = data; });

</script>


<style>
    :global(body) {
        font-family: 'Nunito';
    }
</style>

