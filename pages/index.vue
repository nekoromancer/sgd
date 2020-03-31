<template>
    <div class="container">
        someContents
    </div>
</template>
<script>
    import cards from '~/static/cards.json';

    export default {
        name: 'Index',
        data () {
            return {
                cards,
            };
        },
    };
</script>
