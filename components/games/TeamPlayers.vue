<template>
    <div class="player box-shadows">
        <p
            class="player__flag"
            :style="{ color: team.color }"
        >
            <font-awesome-icon icon="flag" />
        </p>
        <h2
            class="player__team"
        >
            {{ team.name }}
        </h2>
        <div class="player__entry">
            <button
                :class="{
                    'player__entry__add--disabled': entryAddDisabled,
                }"
                class="player__entry__add box-shadows"
                :disabled="entryAddDisabled"
                @click="addEntry"
            >
                <font-awesome-icon icon="plus" />
            </button>
            <team-players-name-input
                v-for="entry in entries"
                :key="entry.id"
                :value="entry.name"
                class="player__entry__name"
                @remove="removeEntry(entry.id)"
                @input="modifyEntry($event, entry.id)"
                @enter="addEntry"
            />
        </div>
    </div>
</template>
<script>
    import TeamPlayersNameInput from '~/components/games/TeamPlayersNameInput';

    export default {
        name: 'TeamPlayers',
        components: {
            TeamPlayersNameInput,
        },
        props: {
            team: {
                type: Object,
                required: true,
            },
        },
        computed: {
            entries () {
                return this.$store.getters['players/getTeamMate'](this.team.id);
            },
            entryAddDisabled () {
                return this.$store.state.players.players.length >= 8;
            },
        },
        methods: {
            addEntry () {
                if (this.entryAddDisabled) {
                    return false;
                }

                this.$store.commit('players/addPlayer', {
                    id: new Date().getTime(),
                    name: '',
                    team: this.team,
                });
            },
            removeEntry (id) {
                this.$store.commit('players/removePlayer', id);
            },
            modifyEntry (name, id) {
                this.$store.commit('players/modifyPlayer', {
                    id,
                    name,
                });
            },
        },
    };
</script>
<style lang="scss" scoped>
    .player {
        width: 200px;
        padding: 0.5em;
        background: rgba(255, 255, 255, 0.15);
        border-radius: 5px;
    }

    .player__flag {
        text-align: center;
        font-size: 1em;
    }

    .player__team {
        text-align: center;
        font-size: 1.2em;
        margin-bottom: 0.5em;
    }

    .player__entry__add {
        width: 100%;
        height: 2em;
        margin-bottom: 1em;
        border: 0;
        border-radius: 2px;
        background: rgba(255, 255, 255, 0.25);
        color: #fff;
    }

    .player__entry__add--disabled {
        opacity: 0.5;
    }

    .player__entry__name {
        margin-bottom: 0.5em;

        &:last-child {
            margin-bottom: 0;
        }
    }
</style>
