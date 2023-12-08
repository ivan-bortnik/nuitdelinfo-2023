<div class="username-form">
  <label for="username" class="username-label">Enter your username:</label>
  <input bind:value={username} type="text" id="username" class="username-input" />
  <button on:click={ handleUsernameSubmit } class="submit-button">Submit Username</button>
</div>

<script>
  let username;
  import { createEventDispatcher } from 'svelte';
    
  const dispatch = createEventDispatcher();

  const handleUsernameSubmit = () => {
    if (username === '') {
      alert('Please enter a username');
      return;
    }

    // Emit an event to notify the parent component
    dispatch('usernameSubmitted', username);
  };
</script>

<style>
  .username-form {
    max-width: 300px;
    margin: 50px auto;
    text-align: center;
  }

  .username-label {
    display: block;
    margin-bottom: 10px;
    font-weight: bold;
  }

  .username-input {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .submit-button {
    background-color: #4caf50;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .submit-button:hover {
    background-color: #45a049;
  }
</style>
