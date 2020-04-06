<template>
    <div class="container teams">
        <title-text
            main-text="붕당을 만듭니다"
            sub-text="(최소 2개 / 최대 4개)"
            icon="flag"
        />
        <div class="teams__team-edit">
            <team
                v-for="team in teams"
                :key="team.id"
                :team-id="team.id"
                :color="team.color"
                class="teams__team-edit__team"
                @enter="addTeam"
                @remove="removeTeam(team.id)"
            />
            <button
                v-if="teams.length < 4"
                tabindex="1"
                class="teams__team-edit__add box-shadows"
                @click="addTeam"
            >
                <font-awesome-icon icon="plus-circle" />
            </button>
        </div>
        <div class="btn-wrapper">
            <button
                :class="{
                    'btn-main--disabled': teams.length < 2,
                }"
                class="btn-main"
                :disabled="teams.length < 2"
                tabindex="2"
                @click="submitTeams"
            >
                다음
            </button>
        </div>
    </div>
</template>
<script>
    import _ from 'lodash';
    import { mapState } from 'vuex';
    import TitleText from '~/components/games/TitleText';
    import Team from '~/components/games/Team';

    export default {
        name: 'Teams',
        components: {
            TitleText,
            Team,
        },
        computed: {
            ...mapState('players', {
                teams: state => state.teams,
            }),
        },
        methods: {
            addTeam () {
                if (this.teams.length >= 4) {
                    return false;
                }

                this.$store.commit('players/addTeam', {
                    id: new Date().getTime(),
                    name: '',
                });
            },
            removeTeam (index) {
                this.$store.commit('players/removeTeam', index);
            },
            validateTeam () {
                const length = this.teams.length;
                const dupCheckArray = [];

                for (let i = 0; i < length; i++) {
                    if (this.teams[i].name.trim().length === 0) {
                        return {
                            result: false,
                            text: '붕당명을 입력해 주세요',
                        };
                    } else {
                        dupCheckArray.push(this.teams[i].name);
                    }
                }

                if (_.uniq(dupCheckArray).length !== length) {
                    return {
                        result: false,
                        text: '동일한 붕당명이 존재합니다',
                    };
                }

                return {
                    result: true,
                };
            },
            submitTeams () {
                const validation = this.validateTeam();

                if (!validation.result) {
                    this.$swal({
                        text: validation.text,
                    });

                    return false;
                }

                this.$router.push({
                    path: '/games/players',
                });
            },
        },
    };
</script>
<style lang="scss" scoped>
    .teams__team-edit {
        margin-bottom: 1em;
        text-align: center;
    }

    .teams__team-edit__team,
    .teams__team-edit__add {
        display: inline-block;
        vertical-align: middle;
    }

    .teams__team-edit__team {
        margin-right: 0.5em;
    }

    .teams__team-edit__add {
        width: 180px;
        height: 180px;
        background: rgba(255, 255, 255, 0.25);
        border: 0;
        border-radius: 5px;
        cursor: pointer;
        font-size: 3em;
        transition: background-color 250ms ease-in-out;

        &:hover {
            background: rgba(255, 255, 255, 0.5);
        }
    }
</style>
