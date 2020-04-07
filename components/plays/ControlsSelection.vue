<template>
    <div class="selection">
        <cards
            :player="player"
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
        watch: {
            player: {
                immediate: true,
                handler (player) {
                    if (player.isOver) {
                        this.$store.commit('games/setNextTurn', true);
                    }
                },
            },
        },
    };
</script>
<style lang="scss">
    .selection {
        position: relative;
        text-align: center;
    }
</style>
