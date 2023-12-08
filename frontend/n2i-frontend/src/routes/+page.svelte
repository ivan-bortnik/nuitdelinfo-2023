<svelte:head>
    <link
      href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900;1000&display=swap"
      rel="stylesheet"
    />
</svelte:head>

{#if page == 'home'}
    <Home on:usernameSubmitted={ usernameSubmittedHandler }/>
{:else if page == 'rooms'}
    <RoomsList rooms={ rooms } on:roomCreated={ roomCreatedHandler } on:joinRoom={ joinRoomHandler }/>
{/if}


<script>
    import Home from '../components/home/home.svelte';
    import RoomsList from '../components/home/roomsList.svelte';

    // import { onMount } from 'svelte';
    import ioClient from 'socket.io-client';
      
    const ENDPOINT = 'http://localhost:3000';
    const socket = ioClient(ENDPOINT);
    export const io = socket;
      
    let username = '';
    let selectedRoom = null;
    let rooms = {};
    let page = 'home';

    function usernameSubmittedHandler(_username) {
        username = _username;
        page = 'rooms';
    }
    
    function roomCreatedHandler() {
        io.emit('createRoom');
    }

    function joinRoomHandler(roomID) {
        io.emit('requestToJoin', roomID.detail);
    }

    io.on('updateRoomsList', (data) => {
        rooms = data;
    });

</script>
      
  
      

<style>

    :global(body) {
      font-family: 'Nunito';
    }

</style>
  