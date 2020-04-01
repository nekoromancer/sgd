<template>
    <div class="container players">
        <title-text
            main-text="참가자를 등록합니다"
            sub-text="(붕당별 각 2명 이상 / 최대 12명)"
            icon="users"
        />
        <div class="players__player-edit">
            <team-players
                v-for="team in teams"
                :key="team.id"
                :team="team"
                class="players__player-edit__team-player"
            />
        </div>
        <div class="btn-wrapper">
            <button
                class="btn-black"
                @click="$router.push('/games/teams')"
            >
                뒤로
            </button>
            <button
                class="btn-main"
                @click="submitPlayers"
            >
                다음
            </button>
        </div>
    </div>
</template>
<script>
    import { mapState } from 'vuex';
    import TitleText from '~/components/games/TitleText';
    import TeamPlayers from '~/components/games/TeamPlayers';

    export default {
        name: 'Players',
        components: {
            TitleText,
            TeamPlayers,
        },
        computed: {
            ...mapState('players', {
                teams: state => state.teams,
            }),
        },
        mounted () {
            if (this.teams.length < 2) {
                this.$router.push({
                    path: '/games/teams',
                });
            }
        },
        methods: {
            validatePlayers () {
                if (!this.$store.getters['players/hasTeam2MorePlayers']) {
                    return {
                        result: false,
                        text: '붕당은 2명 이상으로 구성되어야 합니다',
                    };
                }

                if (!this.$store.getters['players/isNotEmptyPlayerName']) {
                    return {
                        result: false,
                        text: '참가자의 이름을 입력해주세요',
                    };
                }

                if (!this.$store.getters['players/isNotDupPlayerName']) {
                    return {
                        result: false,
                        text: '동일한 이름의 참가자가 있습니다',
                    };
                }

                return {
                    result: true,
                };
            },
            submitPlayers () {
                const validation = this.validatePlayers();

                if (!validation.result) {
                    this.$swal({
                        text: validation.text,
                        icon: 'warning',
                    });

                    return false;
                }
            },
        },
    };
</script>
<style lang="scss">
    .players {
        position: relative;
    }

    .players__player-edit {
        text-align: center;
        margin-bottom: 1em;
    }

    .players__player-edit__team-player {
        display: inline-block;
        margin-right: 1em;
        vertical-align: top;

        &:last-child {
            margin-right: 0;
        }
    }
</style>
