<script>
    
</script>

<div class="card">
    <div class="card-outside">
        <div class="card-inner"></div>
    </div>
    <slot class="card-title" name="card-title"/>
    <slot class="card-thumb" name="card-thumb"/>
    <slot class="card-desc" name="card-desc"/>
</div>

<style lang="scss">
    @import './card.scss';
</style>