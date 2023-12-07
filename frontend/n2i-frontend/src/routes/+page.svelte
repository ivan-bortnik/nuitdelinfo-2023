
<script>
    import { onMount, onDestroy, beforeUpdate } from 'svelte';
    import ioClient from 'socket.io-client';
    import { writable } from 'svelte/store';
  
    const ENDPOINT = 'http://localhost:3000';
    const roomInfo = writable({ createdRoom: '', canJoinRoom: false });
  
    let socket;
  
    onMount(() => {
      socket = ioClient(ENDPOINT);
  
      socket.on('connect', () => {
        console.log('Connecté au serveur :', socket.id);
      });
  
      socket.on('disconnect', () => {
        console.log('Déconnecté du serveur');
      });
  
      socket.on('roomCreated', (room) => {
        console.log('Salle créée :', room);
        roomInfo.update(info => ({ ...info, createdRoom: room, canJoinRoom: true }));
      });
    });
  
    beforeUpdate(() => {
      if (socket) {
        socket.disconnect();
      }
    });
  
    const createRoom = () => {
      socket.emit('createRoom');
    };
  
    const joinRoom = () => {
      const { createdRoom, canJoinRoom } = $roomInfo;
      if (canJoinRoom) {
        socket.emit('joinRoom', createdRoom);
      }
    };
  </script>
  
  <h1>Bienvenue sur SvelteKit</h1>
  <p>Visitez <a href="https://kit.svelte.dev">kit.svelte.dev</a> pour lire la documentation</p>
  
  <div>
    <button on:click={createRoom}>Créer une salle</button>
  
    {#if $roomInfo.createdRoom}
      <p>Salle créée : {$roomInfo.createdRoom}</p>
      <button on:click={joinRoom} disabled={!$roomInfo.canJoinRoom}>Rejoindre la salle</button>
    {/if}
  </div>
  