<template>
    <div class="plays">
        <div class="plays__container">
            <section class="plays__players">
                <player
                    v-for="player in getPlayers"
                    :key="player.id"
                    :player-id="player.id"
                    class="plays__players__player"
                />
            </section>
            <logs />
        </div>
        <controls
            class="plays__controls"
        />
    </div>
</template>
<script>
    import { mapGetters } from 'vuex';
    import Cards from '~/static/cards.json';
    import Castigate from '~/static/castigate.json';
    import Player from '~/components/plays/Player';
    import Logs from '~/components/plays/Logs';
    import Controls from '~/components/plays/Controls';

    export default {
        name: 'Plays',
        components: {
            Player,
            Logs,
            Controls,
        },
        data () {
            return {
                generalCards: Cards,
                castigateCard: Castigate,
            };
        },
        computed: {
            ...mapGetters('players', {
                players: 'getSortedPlayers',
            }),
            getPlayers () {
                return this.$store.state.games.players;
            },
        },
        created () {
            if (this.players.length === 0) {
                this.$router.push({
                    path: '/games/players',
                });
            }

            this.$store.commit('games/initGames', this.players);
            this.$store.commit('games/setCardData', {
                general: this.generalCards,
                castigate: this.castigateCard,
            });
        },
    };
</script>
<style lang="scss" scoped>
    .plays {
        width: 100%;
    }

    .plays__container {
        width: 1080px;
        margin: auto;
        overflow: hidden;
        height: 100%;
    }

    .plays__players {
        margin-bottom: 1em;
        padding: 1em 0;
        text-align: center;
    }

    .plays__players__player {
        vertical-align: top;
    }

    .plays__controls {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 390px;
    }
</style>
