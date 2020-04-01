<template functional>
    <div class="title-text">
        <h1 class="title-text__main">
            <font-awesome-icon :icon="props.icon" /> {{ props.mainText }}
        </h1>
        <p
            v-if="props.subText"
            class="title-text__sub"
        >
            {{ props.subText }}
        </p>
    </div>
</template>
<script>
    export default {
        name: 'TitleText',
        props: {
            mainText: {
                type: String,
                required: true,
            },
            subText: {
                type: String,
                default: '',
            },
            icon: {
                type: String,
                default: '',
            },
        },
    };
</script>
<style lang="scss">
    .title-text {
        margin-bottom: 2em;
    }

    .title-text__main {
        padding: 1em 0 0.25em;
        font-size: 1.5em;
    }

    .title-text__sub {
        padding-left: 1.75em;
        font-size: 1.2em;
    }
</style>
