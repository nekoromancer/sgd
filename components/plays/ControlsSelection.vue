<template>
    <div class="selection">
        <cards
            :card-id="player.card"
        />
    </div>
</template>
<script>
    import { mapState, mapGetters } from 'vuex';
    import Cards from '~/components/plays/Cards';

    export default {
        name: 'Selection',
        components: {
            Cards,
        },
        computed: {
            ...mapState('games', {
                current: state => state.current,
                cards: state => state.cards,
            }),
            ...mapGetters('games', {
                player: 'getCurrentPlayer',
            }),
        },
    };
</script>
<style lang="scss">
    .selection {
        position: relative;
        text-align: center;
    }
</style>
