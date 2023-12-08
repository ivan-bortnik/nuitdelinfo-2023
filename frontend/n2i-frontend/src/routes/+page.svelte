<script>
    import { onMount } from 'svelte';
    import ioClient from 'socket.io-client';
    import PseudoForm from '../components/connexion/pseudoForm.svelte';
    import RoomList from '../components/connexion/roomDisplay.svelte';
    import DisplayExample from '../path-to-your-component/DisplayExample.svelte';
      
    const ENDPOINT = 'http://localhost:3000';
    const socket = ioClient(ENDPOINT);
    export const io = socket;
      
    var rooms = {};
    let pseudo = '';
    let selectedRoom = null;
    
    onMount(() => {
      // Fetch rooms or perform any other initializations here
      io.on('updateRoomsList', (data) => {
        rooms = data;
      });
    });
  
    const handlePseudoSubmitted = (submittedPseudo) => {
      // Update the pseudo in the parent component
      pseudo = submittedPseudo;
    };
  
    const handleRoomClick = (roomTitle) => {
      selectedRoom = roomTitle;
    };
  </script>
      
  <svelte:head>
    <link
      href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900;1000&display=swap"
      rel="stylesheet"
    />
  </svelte:head>
      
  {#if pseudo === ''}
    <PseudoForm {pseudo} on:pseudoSubmitted={handlePseudoSubmitted} />
  {:else if selectedRoom !== null}
    <DisplayExample {roomTitle=selectedRoom} />
  {:else}
    <RoomList {io} {rooms} on:roomClick={handleRoomClick} />
  {/if}

<style>

    :global(body) {
      font-family: 'Nunito';
    }
  </style>
  