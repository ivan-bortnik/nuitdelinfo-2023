<script>
  export let pseudo;
  import { createEventDispatcher } from 'svelte';
    
  const dispatch = createEventDispatcher();

  const handlePseudoSubmit = () => {
    if (pseudo === '') {
      alert('Please enter a pseudo');
      return;
    }

    // Emit an event to notify the parent component
    dispatch('pseudoSubmitted', pseudo);
  };
</script>

<div class="pseudo-form">
  <label for="pseudo" class="pseudo-label">Enter your pseudo:</label>
  <input bind:value={pseudo} type="text" id="pseudo" class="pseudo-input" />
  <button on:click={handlePseudoSubmit} class="submit-button">Submit Pseudo</button>
</div>

<style>
  .pseudo-form {
    max-width: 300px;
    margin: 50px auto;
    text-align: center;
  }

  .pseudo-label {
    display: block;
    margin-bottom: 10px;
    font-weight: bold;
  }

  .pseudo-input {
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
