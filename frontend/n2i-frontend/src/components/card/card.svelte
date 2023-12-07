<div class="card">
    { #if !isFlipped }

    <!-- Front -->
    <p class="title">{ title }</p>
    <div class="image-container">
        <img src="https://picsum.photos/125" alt="">
    </div>
    <p class="text">{ text }</p>
    
    { :else }
    
    <!-- Back -->
    <p>BACK</p>
    
    { /if }
</div>


<script>
    
    export let title = "Title";
    export let text = "Card description and such";
    export let isFlipped = false;
    
</script>


<style lang="scss">
    @use './card.scss';
</style>