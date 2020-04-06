<template>
    <div class="container orders">
        <title-text
            main-text="순서를 정해주세요"
            icon="sort-numeric-down"
        />
        <div class="orders__edit">
            <order
                v-for="player in players"
                :key="player.id"
                :player="player"
                :player-length="players.length"
                @prev="onPrev"
                @next="onNext"
            />
        </div>
        <div class="btn-wrapper">
            <button
                class="btn-black"
                @click="$router.push('/games/players')"
            >
                뒤로
            </button>
            <button
                class="btn-main"
                @click="$router.push('/plays')"
            >
                시작
            </button>
        </div>
    </div>
</template>
<script>
    import TitleText from '~/components/games/TitleText';
    import Order from '~/components/games/Order';

    export default {
        name: 'Orders',
        components: {
            TitleText,
            Order,
        },
        computed: {
            players () {
                return this.$store.getters['players/getSortedPlayers'];
            },
        },
        mounted () {
            if (this.players.length === 0) {
                this.$router.push({
                    path: '/games/players',
                });
            }
        },
        methods: {
            onPrev (event) {
                this.$store.commit('players/playerOrderPrev', event.id);
            },
            onNext (event) {
                this.$store.commit('players/playerOrderNext', event.id);
            },
        },
    };
</script>
<style lang="scss" scoped>
    .orders__edit {
        position: relative;
        margin-bottom: 16px;
        text-align: center;
        font-size: 0;
    }
</style>
