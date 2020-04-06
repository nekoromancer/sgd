<template>
    <div class="controls box-shadows">
        <div class="controls__content content">
            <controls-turn
                class="content__turn"
            />
            <controls-selection />
        </div>
    </div>
</template>
<script>
    import ControlsTurn from '~/components/plays/ControlsTurn';
    import ControlsSelection from '~/components/plays/ControlsSelection';

    export default {
        name: 'Controls',
        components: {
            ControlsTurn,
            ControlsSelection,
        },
    };
</script>
<style lang="scss" scoped>
    .controls {
        display: flex;
        width: 100%;
        background: $darkSub;
        border-radius: 5px;
        justify-content: center;
    }

    .controls__content {
        width: 100%;
        max-width: 1080px;
        margin: auto;
        padding: 1em 0;
    }

    .content__turn {
        margin-bottom: 1em;
    }
</style>
