<template>
    <div class="app">
        <div class="app__wrapper">
            <div class="app__wrapper__contents">
                <partial-header />
                <slot />
            </div>
        </div>
    </div>
</template>
<script>
    import PartialHeader from '~/components/Header';

    export default {
        name: 'Layout',
        components: {
            PartialHeader,
        },
    };
</script>
<style lang="scss" scoped>
    .app {
        display: flex;
        flex: 1 1 auto;
        flex-wrap: nowrap;
        min-width: 0;
        line-height: 1.5;
        background-color: $darkMain;
        color: $fontColorMain;
        font-family: 'MapoGoldenPier', sans-serif;
    }

    .app__wrapper {
        flex: 1 1 auto;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        max-width: 100%;
        position: relative;
    }

    .app__wrapper__contents {
        display: flex;
        flex: 1 0 auto;
        justify-content: center;
        max-width: 100%;
        padding: 64px 0 0;
    }
</style>
