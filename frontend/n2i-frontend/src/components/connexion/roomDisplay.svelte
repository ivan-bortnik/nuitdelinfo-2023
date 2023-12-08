<script>
    export let io;
    export let rooms;
    import { createEventDispatcher } from 'svelte';
      
    const dispatch = createEventDispatcher();
  
    const handleRoomClick = (roomTitle) => {
      dispatch('roomClick', roomTitle);
    };
  </script>
  
  <button on:click={() => io.emit('createRoom')} class="create-room-button">CREATE ROOM</button>
  <h2 class="available-rooms-heading">Available rooms</h2>
  
  {#each Object.keys(rooms) as room}
    {#if rooms[room].playersCount < 2}
      <button on:click={() => handleRoomClick(rooms[room].id)} class="room-button">
        Room {rooms[room].id}: {rooms[room].playersCount}/2 
        {#if rooms[room].players && rooms[room].players.length > 0}
          [{rooms[room].players[0]}]
        {/if}
      </button>
      <br />
    {/if}
  {/each}

  
  <style>
    .create-room-button {
      background-color: #4caf50;
      color: white;
      padding: 10px 15px;
      border: none;
      border-radius: 5px;
      margin-bottom: 10px;
      cursor: pointer;
    }
  
    .create-room-button:hover {
      background-color: #45a049;
    }
  
    .available-rooms-heading {
      font-size: 1.5em;
      margin-bottom: 10px;
      text-align: center;
    }
  
    .room-button {
      background-color: #3498db;
      color: white;
      padding: 10px 15px;
      border: none;
      border-radius: 5px;
      margin-bottom: 5px;
      cursor: pointer;
      text-align: center;
      width: fit-content;
    }
  
    .room-button:hover {
      background-color: #2980b9;
    }
  </style>
  