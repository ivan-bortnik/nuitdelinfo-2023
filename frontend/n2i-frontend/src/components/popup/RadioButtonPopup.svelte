<script>
    import { createEventDispatcher } from 'svelte';
    import { dialog } from 'svelte/dialog';
  
    let selectedOption = '';
    const dispatch = createEventDispatcher();
  
    const options = [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ];
  
    function handleSelectOption() {
      // Dispatch the selected option to the parent component
      dispatch('selectedOption', selectedOption);
      // Close the dialog
      dialog.close(selectedOption);
    }
  </script>
  
  <style>
    /* Styling for your popup can go here */
  </style>
  
  {#if $dialog}
    <div>
      <h3>Select an option:</h3>
      {#each options as { label, value } (value)}
        <label>
          <input type="radio" bind:group={selectedOption} value={value} />
          {label}
        </label>
      {/each}
      <button on:click={handleSelectOption}>Select</button>
    </div>
  {/if}
  