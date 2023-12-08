<div class="card card-{theme}" class:enlargable={ isEnlargable }>
    { #if !isFlipped }

    <!-- Front -->
    <p class="title">{ data.title }</p>
    <div class="image-container">
        <img src="" alt="">
    </div>
    <p class="description">{ data.desc }</p>
    
    { :else }
    
    <!-- Back -->
    <div class="back-{theme}"></div>
    
    { /if }
</div>


<script>
    import jsonData from '../../cards.json';
    
    export let type =""; 

    let max = 10
    let number = 0;
    let data = jsonData.action[0];

    if(type == "action")
    {
        max = 9;
        number = Math.floor(Math.random() * (max - 0 + 1)) + 0
        data = jsonData.action[number];
    }
    else if(type == "info")
    {
        max =9;
        number = Math.floor(Math.random() * (max - 0 + 1)) + 0
        data = jsonData.info[number];
    }

    
    
    
    export let title = "Title";
    export let description = "Card description and such";
    export let isFlipped = false;
    export let isEnlargable = false;
    export let theme = "classique";
    
</script>


<style lang="scss">
    @use './card.scss';
</style>