<div class="misinformation-card">
    <div class="image-container">
        {@html data.image}
    </div>
    <div class="txt-container">
        <p>{ data.title }</p>
    </div>    
</div>


<script>

    import jsonData from '../../cards.json';
    let max = 14;
    let number = Math.floor(Math.random() * (max - 0 + 1)) + 0;
    let data = jsonData.intox[number];

</script>


<style lang="scss">
    @use './misinformationCard.scss';
</style>