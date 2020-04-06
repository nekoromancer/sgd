<template>
    <header class="header box-shadows">
        <div class="header__inner">
            <nuxt-link to="/">
                <h1 class="header__title">
                    승경도 도우미
                </h1>
            </nuxt-link>
            <button
                class="header__dice-button"
                @click="toggleDiceActivate"
            >
                <font-awesome-icon icon="dice" />
            </button>
            <header-dice
                v-if="showDice"
                class="header__dice-content"
            />
        </div>
    </header>
</template>
<script>
    import HeaderDice from '~/Components/HeaderDice';

    export default {
        name: 'Header',
        components: {
            HeaderDice,
        },
        data () {
            return {
                showDice: false,
            };
        },
        methods: {
            toggleDiceActivate (to) {
                if (typeof to === 'boolean') {
                    this.showDice = to;
                } else {
                    this.showDice = !this.showDice;
                }
            },
        },
    };
</script>
<style lang="scss" scoped>
    .header {
        display: flex;
        flex: 1 1 auto;
        position: fixed;
        width: 100%;
        height: 64px;
        align-items: center;
        top: 0;
        left: 0;
        right: 0;
        transform: translateZ(0);
        z-index: 5;
        background: $darkSub;
    }

    .header__inner {
        display: flex;
        position: relative;
        justify-content: space-between;
        align-items: center;
        width: $tabletBreakPoint;
        margin: auto;

        a {
            color: $fontColorMain;
            text-decoration: none;
        }
    }

    .header__title {
        display: inline;
        font-family: 'SangSangRock', sans-serif;
    }

    .header__dice-button {
        border: 0;
        background: transparent;
        cursor: pointer;
        color: #fff;
        font-size: 2em;
    }

    .header__dice-content {
        position: absolute;
        top: 60px;
        right: 0;
    }
</style>
