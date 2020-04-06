<template>
    <h1 class="turns">
        제 {{ turn }} 년 {{ 20 + (turn - 1) }} 세
        [<span
            :style="{ color: players[current].team.color }"
        >
            <font-awesome-icon icon="flag" />
        </span>
        {{ players[current].team.name }}]
        {{ players[current].name }} 의 차례
    </h1>
</template>
<script>
    import { mapState, mapGetters } from 'vuex';

    export default {
        name: 'ControlsTurn',
        computed: {
            ...mapState('games', {
                turn: state => state.turn,
                current: state => state.current,
            }),
            ...mapGetters('players', {
                players: 'getSortedPlayers',
            }),
        },
    };
</script>
<style lang="scss" scoped>
    .turns {
        text-align: center;
        font-size: 1.6em;
    }
</style>
