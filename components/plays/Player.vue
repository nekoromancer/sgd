<template>
    <div class="player box-shadows">
        <p class="player__team">
            <span
                :style="{ color: player.team.color }"
            >
                <font-awesome-icon icon="flag" />
            </span>
            {{ player.team.name }}
        </p>
        <p class="player__name">
            {{ player.name }}
        </p>
    </div>
</template>
<script>
    export default {
        name: 'Player',
        props: {
            playerId: {
                type: Number,
                required: true,
            },
        },
        computed: {
            player () {
                return this.$store.getters['games/getSpecificPlayer'](this.playerId);
            },
        },
    };
</script>
<style lang="scss" scoped>
    .player {
        display: inline-block;
        width: 125px;
        margin-right: 10px;
        padding: 0.5em;
        background: $darkSub;
        text-align: center;

        &:last-child {
            margin-right: 0;
        }
    }

    .player__team {
        font-size: 0.8em;
    }
</style>
