<div class="misinformation-card">
    <div class="image-container">
        <img src="https://picsum.photos/100/100" alt="">
    </div>
    <div class="txt-container">
        <p>{ title }</p>
    </div>    
</div>


<script lang="ts">

export var title = "Card Title";

</script>


<style>

.misinformation-card {
    background-color: white;
    
    width: 175px;
    height: 175px;
    
    border-radius: 16px;
    border: 4px solid #E15151;
    
    filter: drop-shadow(0 0 5px black);
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;    
}

.image-container {
    flex-grow: 1;
    display: flex;
    align-items: center;
}


p {
    text-align: center;
    margin: 8px 0 12px 0;
    font-weight: 600;
}

</style>