<div class="card">
    { #if !isFlipped }

    <!-- Front -->
    <p class="title">{ title }</p>
    <div class="image-container">
        <img src="https://picsum.photos/125" alt="">
    </div>
    <p class="description">{ description }</p>
    
    { :else }
    
    <!-- Back -->
    <div class="back"></div>
    
    { /if }
</div>


<script>
    
    export let title = "Title";
    export let description = "Card description and such";
    export let isFlipped = false;
    
</script>


<style lang="scss">
    @use './card.scss';
</style>